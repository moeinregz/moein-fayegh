"use client";

import { useLanguage, useT } from "@/components/Providers";
import { Traffic } from "@/components/EditorBar";
import RevealOnScroll from "@/components/RevealOnScroll";

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
    <section id="hero" className="relative overflow-hidden pb-24 pt-[150px]">
      <div className="pointer-events-none absolute -right-[120px] -top-[160px] h-[520px] w-[520px] rounded-full bg-violet opacity-[.14] blur-[90px]" />
      <div className="pointer-events-none absolute -bottom-[160px] -left-[100px] h-[420px] w-[420px] rounded-full bg-amber opacity-10 blur-[90px]" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-6">
        <span className="mono text-faint mb-[18px] inline-flex items-center gap-2 text-[0.8rem] text-textFaint before:content-['//'] before:text-amber ltr">
          ~/moein-fayegh/index.tsx
        </span>

        <RevealOnScroll className="grid grid-cols-1 gap-[34px] md:grid-cols-2">
          {/* CODE EDITOR PANE */}
          <div className="overflow-hidden rounded-lg2 border border-line bg-panel shadow-[0_30px_60px_rgba(0,0,0,.35)]">
            <div className="flex items-center gap-2.5 border-b border-line bg-panel2 px-4 py-3">
              <Traffic />
              <span className="mono ms-1 text-[0.78rem] text-textDim">index.tsx</span>
            </div>
            <div className="flex px-6 py-[26px]">
              <div className="mono ltr select-none pe-4 text-[0.9rem] leading-[2] text-textFaint">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <div key={n}>{n}</div>
                ))}
              </div>
              <div className="mono ltr flex-1 whitespace-pre-wrap text-[0.94rem] leading-[2]">
                <span className="text-violet">const</span> developer{" "}
                <span className="text-textFaint">=</span> {"{"}
                <br />
                &nbsp;&nbsp;name<span className="text-textFaint">:</span>{" "}
                <span className="text-mint">
                  &quot;{t("معین فایق", "Moein Fayegh")}&quot;
                </span>
                ,<br />
                &nbsp;&nbsp;role<span className="text-textFaint">:</span>{" "}
                <span className="text-mint">
                  &quot;{t("توسعه‌دهنده فول‌استک", "Full-Stack Developer")}&quot;
                </span>
                ,<br />
                &nbsp;&nbsp;stack<span className="text-textFaint">:</span> [
                <span className="text-mint">&quot;React&quot;</span>,{" "}
                <span className="text-mint">&quot;Next.js&quot;</span>,{" "}
                <span className="text-mint">&quot;Node.js&quot;</span>],
                <br />
                &nbsp;&nbsp;status<span className="text-textFaint">:</span>{" "}
                <span className="text-mint">
                  &quot;{t("در دسترس برای همکاری", "Open to work")}&quot;
                </span>
                ,<br />
                &nbsp;&nbsp;
                <span className="italic text-textFaint">
                  // {t("از UI تا دیتابیس", "UI to database, all of it")}
                </span>
                <br />
                {"}"};
                <span className="ms-0.5 inline-block h-[1.1em] w-2 animate-blink bg-amber align-text-bottom" />
              </div>
            </div>
          </div>

          {/* TERMINAL PANE */}
          <div className="overflow-hidden rounded-lg2 border border-line bg-panel shadow-[0_30px_60px_rgba(0,0,0,.35)]">
            <div className="flex items-center gap-2.5 border-b border-line bg-panel2 px-4 py-3">
              <Traffic />
              <span className="mono ms-1 text-[0.78rem] text-textDim">zsh — build</span>
            </div>
            <div className="mono ltr px-6 py-[26px] text-[0.86rem] leading-[1.95] text-textDim">
              <div className="animate-termIn opacity-0" style={{ animationDelay: ".1s" }}>
                <span className="text-mint">➜</span>{" "}
                <b className="font-semibold text-text">npm run introduce</b>
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
                  <span className="text-mint">✓</span> {line.label}{" "}
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
          </div>
        </RevealOnScroll>

        <RevealOnScroll className="mt-[26px] flex flex-wrap gap-3.5">
          <a
            href="#projects"
            className="mono inline-flex items-center gap-2 rounded-sm2 bg-amber px-6 py-3.5 text-[0.9rem] font-semibold text-[#1a1200] transition-transform hover:-translate-y-0.5 hover:shadow-[0_12px_26px_rgba(255,180,84,.28)]"
          >
            {t("مشاهده نمونه‌کارها", "View Projects")}
          </a>
          <a
            href="#contact"
            className="mono inline-flex items-center gap-2 rounded-sm2 border border-line px-6 py-3.5 text-[0.9rem] font-semibold text-text transition-colors hover:border-mint hover:text-mint"
          >
            {t("شروع همکاری", "Start a Project")}
          </a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
