import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";

// This route runs on the Node.js runtime (the default for route handlers),
// which is required because we use the `fs` module below.

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "messages.json");

interface ContactPayload {
  name: string;
  phone: string;
  email?: string;
  message: string;
}

interface StoredMessage extends ContactPayload {
  id: string;
  receivedAt: string;
}

async function readMessages(): Promise<StoredMessage[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf-8");
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    // File doesn't exist yet (or is invalid) — start fresh
    return [];
  }
}

async function writeMessages(messages: StoredMessage[]) {
  await fs.mkdir(DATA_DIR, { recursive: true });
  await fs.writeFile(DATA_FILE, JSON.stringify(messages, null, 2), "utf-8");
}

export async function POST(request: Request) {
  let body: Partial<ContactPayload>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON body" }, { status: 400 });
  }

  const name = (body.name || "").toString().trim();
  const phone = (body.phone || "").toString().trim();
  const email = (body.email || "").toString().trim();
  const message = (body.message || "").toString().trim();

  if (!name || !phone || !message) {
    return NextResponse.json(
      { ok: false, error: "نام، شماره تماس و پیام الزامی هستند." },
      { status: 400 }
    );
  }

  const entry: StoredMessage = {
    id: crypto.randomUUID(),
    receivedAt: new Date().toISOString(),
    name,
    phone,
    email: email || undefined,
    message,
  };

  try {
    const messages = await readMessages();
    messages.push(entry);
    await writeMessages(messages);
  } catch (err) {
    console.error("Failed to save contact message:", err);
    return NextResponse.json(
      { ok: false, error: "ذخیره‌سازی پیام با خطا مواجه شد." },
      { status: 500 }
    );
  }

  // ------------------------------------------------------------------
  // Optional: forward the message by email instead of / in addition to
  // saving it to disk. Uncomment and configure once you have a provider
  // (e.g. Resend, Postmark, or SMTP via nodemailer) and its API key set
  // as an environment variable. Example using Resend's HTTP API:
  //
  // await fetch("https://api.resend.com/emails", {
  //   method: "POST",
  //   headers: {
  //     Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify({
  //     from: "site@yourdomain.com",
  //     to: "you@yourdomain.com",
  //     subject: `New message from ${name}`,
  //     text: `${name} (${phone}, ${email || "no email"}):\n\n${message}`,
  //   }),
  // });
  // ------------------------------------------------------------------

  return NextResponse.json({ ok: true });
}

// Lets you sanity-check saved messages by visiting /api/contact in a browser
// while running locally. Remove or protect this in production if you'd
// rather keep submissions private.
export async function GET() {
  const messages = await readMessages();
  return NextResponse.json({ ok: true, count: messages.length, messages });
}
