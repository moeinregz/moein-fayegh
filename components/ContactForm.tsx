"use client";

import { useState, type FormEvent } from "react";
import { useT } from "@/components/Providers";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const t = useT();
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot: real users never fill this hidden field
    if (data.get("company")) {
      setStatus("success");
      form.reset();
      return;
    }

    const payload = {
      name: String(data.get("name") || ""),
      phone: String(data.get("phone") || ""),
      email: String(data.get("email") || ""),
      message: String(data.get("message") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Request failed");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        t(
          "ارسال پیام با خطا مواجه شد. لطفاً دوباره تلاش کنید.",
          "Something went wrong while sending your message. Please try again."
        )
      );
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-lg2 border border-line bg-panel p-[26px] pb-[30px]"
    >
      <div className="mono ltr mb-5 border-b border-line pb-4 text-[0.82rem] text-textFaint">
        $ contact --send{" "}
        <span className="opacity-50">
          // <b className="text-mint">{t("پر کردن فرم زیر", "fill the form below")}</b>
        </span>
      </div>

      {/* honeypot field — hidden from real users, bots tend to fill every field */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <Field label="name">
        <input
          type="text"
          name="name"
          required
          placeholder={t("نام شما", "Your name")}
          className="w-full rounded-sm2 border border-line bg-ink px-3.5 py-3 text-[0.95rem] text-text transition-colors focus:border-mint focus:outline-none"
        />
      </Field>

      <Field label="phone">
        <input
          type="tel"
          name="phone"
          required
          placeholder={t("شماره تماس", "Phone number")}
          className="w-full rounded-sm2 border border-line bg-ink px-3.5 py-3 text-[0.95rem] text-text transition-colors focus:border-mint focus:outline-none"
        />
      </Field>

      <Field label="email (optional)">
        <input
          type="email"
          name="email"
          placeholder={t("ایمیل", "Email")}
          className="w-full rounded-sm2 border border-line bg-ink px-3.5 py-3 text-[0.95rem] text-text transition-colors focus:border-mint focus:outline-none"
        />
      </Field>

      <Field label="message">
        <textarea
          name="message"
          required
          rows={4}
          placeholder={t("درباره پروژه‌تون بگید...", "Tell me about your project...")}
          className="w-full resize-y rounded-sm2 border border-line bg-ink px-3.5 py-3 text-[0.95rem] text-text transition-colors focus:border-mint focus:outline-none"
        />
      </Field>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mono mt-1.5 w-full rounded-sm2 bg-mint py-3.5 text-[0.92rem] font-bold text-[#04231a] transition-transform hover:-translate-y-0.5 hover:shadow-[0_14px_26px_rgba(110,231,183,.22)] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? t("در حال ارسال...", "Sending...") : "$ send-request"}
      </button>

      {status === "success" && (
        <p className="mono ltr mt-3 text-[0.82rem] text-mint" role="status">
          ✓ {t("پیامتون ذخیره شد، به‌زودی جواب می‌دم.", "Message saved — I'll get back to you soon.")}
        </p>
      )}
      {status === "error" && (
        <p className="mono ltr mt-3 text-[0.82rem] text-rose" role="alert">
          ✕ {errorMsg}
        </p>
      )}
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="mb-4">
      <label className="mono ltr mb-[7px] flex items-center gap-1.5 text-[0.78rem] text-textFaint before:content-['>'] before:text-amber">
        {label}
      </label>
      {children}
    </div>
  );
}
