"use client";

import { useT } from "@/components/Providers";
import RevealOnScroll from "@/components/RevealOnScroll";
import ContactForm from "@/components/ContactForm";

const CARDS = [
  {
    href: "https://instagram.com/regzly",
    fa: "اینستاگرام",
    en: "Instagram",
    value: "@regzly",
    path: "M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5a5 5 0 100 10 5 5 0 000-10zm6.5-.5a1 1 0 10.001 2.001A1 1 0 0018.5 6.5z",
  },
  {
    href: "https://wa.me/989965745535",
    fa: "واتساپ",
    en: "WhatsApp",
    value: "+989965745535",
    path: "M12 2a10 10 0 00-8.53 15.18L2 22l4.97-1.3A10 10 0 1012 2zm0 18a8 8 0 01-4.06-1.1l-.29-.17-2.95.77.79-2.88-.19-.3A8 8 0 1112 20zm4.47-5.53c-.25-.13-1.47-.72-1.7-.8-.23-.08-.4-.13-.57.13-.17.25-.65.8-.8.96-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.12-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.4-.42-.57-.43h-.48c-.17 0-.45.06-.68.32-.23.25-.9.88-.9 2.13 0 1.25.92 2.46 1.05 2.63.13.17 1.82 2.78 4.4 3.9.61.26 1.09.42 1.46.54.61.19 1.17.16 1.61.1.49-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29z",
  },
  {
    href: "https://t.me/dontbelievethat",
    fa: "تلگرام",
    en: "Telegram",
    value: "@dontbelievethat",
    path: "M9.04 15.44l-.38 5.36c.55 0 .78-.24 1.07-.53l2.56-2.43 5.3 3.88c.97.54 1.66.26 1.9-.9L23.96 3.7c.28-1.28-.46-1.78-1.33-1.45L1.3 10.54c-1.25.49-1.23 1.19-.21 1.51l5.55 1.73L19.53 6.3c.6-.4 1.15-.18.7.22z",
  },
  {
    href: "tel:+989965745535",
    fa: "تماس تلفنی",
    en: "Call",
    value: "+989965745535",
    path: "M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.05-.24 11.36 11.36 0 003.56.57 1 1 0 011 1v3.6a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.6a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.05z",
  },
];

export default function Contact() {
  const t = useT();

  return (
    <section id="contact" className="relative py-[110px]">
      <div className="mx-auto max-w-[1180px] px-6">
        <span className="mono ltr mb-[18px] inline-flex items-center gap-2 text-[0.8rem] text-textFaint before:content-['//'] before:text-amber">
          ~/moein-fayegh/contact.sh
        </span>
        <h2 className="mb-3.5 text-[clamp(1.7rem,3.4vw,2.6rem)] font-extrabold">
          {t("بیا همکاری کنیم", "Let's Work Together")}
        </h2>
        <p className="mb-12 max-w-[640px] text-textDim">
          {t("پیامتون رو بفرستید، در سریع‌ترین زمان جواب می‌دم.", "Send a message and I'll get back to you quickly.")}
        </p>

        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <RevealOnScroll className="grid grid-cols-1 gap-3.5 xs:grid-cols-2">
            {CARDS.map((c) => (
              <a
                key={c.en}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="flex items-center gap-3 rounded-md2 border border-line bg-panel p-[18px] transition-all hover:-translate-y-1 hover:border-mint"
              >
                <div className="flex h-[38px] w-[38px] flex-none items-center justify-center rounded-[10px] bg-panel2">
                  <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-mint">
                    <path d={c.path} />
                  </svg>
                </div>
                <div>
                  <strong className="block text-[0.88rem]">{t(c.fa, c.en)}</strong>
                  <span className="mono ltr text-[0.76rem] text-textFaint">{c.value}</span>
                </div>
              </a>
            ))}
          </RevealOnScroll>

          <RevealOnScroll>
            <ContactForm />
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
