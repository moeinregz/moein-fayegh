"use client";

import { useLanguage, useT } from "@/components/Providers";
import { Traffic } from "@/components/EditorBar";
import RevealOnScroll from "@/components/RevealOnScroll";
import { XMark } from "@/components/XMark";
import SwingBadge from "@/components/hero/SwingBadge";

const TERM_LINES_FA = [
  { ok: true, label: "React", note: "رابط کاربری" },
  { ok: true, label: "Next.js", note: "SSR / SEO" },
  { ok: true, label: "Node.js", note: "سرور و API" },
  { ok: true, label: "MongoDB", note: "دیتابیس" },
  { ok: true, label: "WordPress / WooCommerce", note: "" },
  { ok: true, label: "SEO", note: "On-page / Off-page / Technical / Local" },
];

const TERM_LINES_EN = [
  { ok: true, label: "React", note: "UI" },
  { ok: true, label: "Next.js", note: "SSR / SEO" },
  { ok: true, label: "Node.js", note: "server & APIs" },
  { ok: true, label: "MongoDB", note: "database" },
  { ok: true, label: "WordPress / WooCommerce", note: "" },
  { ok: true, label: "SEO", note: "On-page / Off-page / Technical / Local" },
];

export default function Hero() {
  const { lang } = useLanguage();
  const t = useT();
  const lines = lang === "fa" ? TERM_LINES_FA : TERM_LINES_EN;

  return (
    <section id="hero" className="bg-arl-black bg-xmarks relative overflow-hidden pb-24 pt-[168px]">
      {/* large faint X-mark watermarks, echoing the crossed eye-scar motif */}
      <XMark className="x-watermark -right-16 top-8 h-[420px] w-[420px] rotate-[8deg] sm:-right-10" />
      <XMark className="x-watermark -left-24 -bottom-16 h-[260px] w-[260px] -rotate-[12deg]" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-6">
        <span className="mono ltr mb-[18px] inline-flex items-center gap-2 text-[0.8rem] text-textFaint before:content-['//'] before:text-bone/80">
          ~/moein-fayegh/index.tsx
        </span>

        <div className="grid grid-cols-1 items-center gap-[46px] md:grid-cols-[1.05fr_0.95fr]">
          {/* INFO — right side of the section */}
          <div>
            <RevealOnScroll>
              <h1 className="font-display heading-pop mb-5 text-[clamp(2.6rem,6.4vw,4.6rem)] font-normal leading-[1.15] text-bone">
                {t("معین فایق", "Moein Fayegh")}
                <span className="mt-3 block text-[clamp(1.15rem,2.4vw,1.7rem)] text-bone">
                  {t("مهندس نرم‌افزار", "Software Engineer")}
                </span>
              </h1>

              <p className="mb-8 max-w-[520px] text-[1.02rem] leading-[1.9] text-textDim">
                {t(
                  "طراحی و توسعهٔ محصولات وب رو از صفر تا استقرار نهایی پیش می‌برم؛ از معماری سمت سرور و دیتابیس تا رابط کاربری‌ای که واقعاً درست کار می‌کنه.",
                  "I build web products end to end — from server architecture and databases to interfaces that actually work the way they should."
                )}
              </p>
            </RevealOnScroll>

            {/* compact terminal panel — the engineering signal */}
            <RevealOnScroll className="glass-strong overflow-hidden rounded-lg2">
              <div className="flex items-center gap-2.5 border-b border-steel/20 bg-steel/[0.03] px-4 py-3">
                <Traffic />
                <span className="mono ms-1 text-[0.78rem] text-textDim">zsh — build</span>
              </div>
              <div className="mono ltr px-6 py-[26px] text-[0.86rem] leading-[1.95] text-textDim">
                <div className="animate-termIn opacity-0" style={{ animationDelay: ".1s" }}>
                  <span className="text-bone">➜</span> <b className="font-semibold text-text">npm run introduce</b>
                </div>
                <div className="animate-termIn opacity-0" style={{ animationDelay: ".5s" }}>
                  &nbsp;
                </div>
                {lines.map((line, i) => (
                  <div
                    key={line.label}
                    className="animate-termIn opacity-0"
                    style={{ animationDelay: `${0.7 + i * 0.2}s` }}
                  >
                    <span className="text-bloodBright">✓</span> {line.label}{" "}
                    {line.note && <span className="text-textFaint">— {line.note}</span>}
                  </div>
                ))}
                <div className="animate-termIn opacity-0" style={{ animationDelay: "1.95s" }}>
                  &nbsp;
                </div>
                <div className="animate-termIn opacity-0" style={{ animationDelay: "2.1s" }}>
                  <span className="text-textFaint">
                    {t("Build complete — 0 errors, 0 warnings.", "Build complete — 0 errors, 0 warnings.")}
                  </span>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll className="mt-[26px] flex flex-wrap gap-3.5">
              <a
                href="#projects"
                className="mono inline-flex items-center gap-2 rounded-sm2 bg-blood px-6 py-3.5 text-[0.9rem] font-extrabold text-bone transition-transform hover:-translate-y-0.5 hover:shadow-glowBlood"
              >
                {t("مشاهده نمونه‌کارها", "View Projects")}
              </a>
              <a
                href="#contact"
                className="mono glass inline-flex items-center gap-2 rounded-sm2 px-6 py-3.5 text-[0.9rem] font-extrabold text-text transition-colors hover:border-blood/60 hover:text-bloodBright"
              >
                {t("شروع همکاری", "Start a Project")}
              </a>
            </RevealOnScroll>
          </div>

          {/* 3D ID CARD — left side of the section */}
          <RevealOnScroll className="relative">
            <span className="mono ltr absolute -top-8 start-1 hidden items-center gap-2 text-[0.78rem] text-textFaint before:content-['//'] before:text-bone/80 sm:inline-flex">
              {t("بکشش، بچرخونش", "drag it, spin it")}
            </span>
            <div className="h-[420px] w-full sm:h-[520px] md:h-[600px]">
              <SwingBadge />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
