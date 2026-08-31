"use client";

import { useLanguage, useT } from "@/components/Providers";
import RevealOnScroll from "@/components/RevealOnScroll";
import { XMark } from "@/components/XMark";
import SwingBadge from "@/components/hero/SwingBadge";

const SPECS_FA: [string, string][] = [
  ["STACK", "React · Next.js · Node.js"],
  ["DATABASE", "MongoDB · PostgreSQL · MySQL"],
  ["SEO", "On-page · Off-page · Technical · Local"],
];

const SPECS_EN: [string, string][] = [
  ["STACK", "React · Next.js · Node.js"],
  ["DATABASE", "MongoDB · PostgreSQL · MySQL"],
  ["SEO", "On-page · Off-page · Technical · Local"],
];

export default function Hero() {
  const { lang } = useLanguage();
  const t = useT();
  const specs = lang === "fa" ? SPECS_FA : SPECS_EN;

  return (
    <section id="hero" className="bg-arl-black bg-xmarks relative overflow-hidden pb-24 pt-[168px]">
      {/* large faint X-mark watermarks, echoing the crossed eye-scar motif */}
      <XMark className="x-watermark -right-16 top-8 h-[420px] w-[420px] rotate-[8deg] sm:-right-10" />
      <XMark className="x-watermark -left-24 -bottom-16 h-[260px] w-[260px] -rotate-[12deg]" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-6">
        <span className="mono ltr mb-[18px] inline-flex items-center gap-2 text-[0.8rem] text-textFaint before:content-['//'] before:text-bone/80">
          ~/moein-fayegh/index.tsx
        </span>

        <div className="grid grid-cols-1 items-start gap-x-[46px] gap-y-6 md:grid-cols-[0.95fr_1.05fr]">
          {/* CARD — Left side, sits high, up front */}
          <RevealOnScroll className="relative order-2  md:mt-[-100px]">
            <span className="mono ltr absolute -top-8 start-1 hidden items-center gap-2 text-[0.78rem] text-textFaint before:content-['//'] before:text-bone/80 sm:inline-flex">
              {t("بکشش، بچرخونش", "drag it, spin it")}
            </span>
            <div className="h-[480px] w-full sm:h-[560px] md:h-[620px]">
              <SwingBadge />
            </div>
          </RevealOnScroll>

          {/* INFO — right side */}
          <div className="order-1 md:pt-3">
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

            {/* spec sheet — replaces the terminal panel */}
            <RevealOnScroll className="glass-strong overflow-hidden rounded-lg2">
              <div className="flex items-center gap-2.5 border-b border-steel/20 bg-steel/[0.03] px-4 py-3">

                <span className="mono ms-1 text-[0.78rem] text-textDim">spec.json</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2">
                {specs.map(([label, value], i) => (
                  <div
                    key={label}
                    className={`px-5 py-4 ${i % 2 === 0 ? "sm:border-e sm:border-line" : ""} ${
                      i < specs.length - (specs.length % 2 === 0 ? 2 : 1) ? "border-b border-line" : ""
                    }`}
                  >
                    <div className="mono ltr mb-1 text-[0.7rem] font-bold tracking-wider text-bloodBright">
                      {label}
                    </div>
                    <div className="text-[0.92rem] text-text">{value}</div>
                  </div>
                ))}
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
        </div>
      </div>
    </section>
  );
}
