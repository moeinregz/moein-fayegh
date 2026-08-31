"use client";

import { useT } from "@/components/Providers";
import { Traffic } from "@/components/EditorBar";
import RevealOnScroll from "@/components/RevealOnScroll";

const DEPS = [
  ["react", "^18.x"],
  ["next", "^14.x"],
  ["node", "^20.x"],
  ["typescript", "^5.x"],
  ["tailwindcss", "^3.x"],
  ["axios", "^1.x"],
  ["mongodb", "^6.x"],
];

export default function About() {
  const t = useT();

  return (
    <section id="about" className="relative overflow-hidden py-[120px]">
      <div className="bg-scanlines absolute inset-0" />
      <div className="glow-blob -left-[160px] top-1/3 h-[420px] w-[420px] bg-white opacity-[.05]" />
      <div className="x-mark absolute -left-10 bottom-0 h-[200px] w-[200px] opacity-[.22] sm:left-2" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-6">
        <span className="mono ltr mb-[18px] inline-flex items-center gap-2 text-[0.8rem] text-textFaint before:content-['//'] before:text-white/80">
          ~/moein-fayegh/about.tsx
        </span>
        <h2 className="font-display heading-pop mb-3.5 text-[clamp(2rem,4.4vw,3.4rem)] font-normal text-white">
          {t("درباره من", "About Me")}
        </h2>

        <div className="grid grid-cols-1 items-start gap-[50px] md:grid-cols-[1fr_0.85fr]">
          <RevealOnScroll>
            <p className="mb-4 text-[1.02rem] text-textDim">
              {t(
                "یک توسعه‌دهنده فول‌استک با تمرکز روی ساخت محصولات وب سریع، تمیز و مقیاس‌پذیر — از طراحی رابط کاربری تا معماری سمت سرور و دیتابیس. به‌صورت حرفه‌ای با React، Next.js، Node.js، TypeScript، Tailwind CSS، Axios و MongoDB کار می‌کنم و پروژه رو از صفر تا استقرار نهایی به تنهایی جلو می‌برم.",
                "A full-stack developer focused on building fast, clean and scalable web products — from interface design to server architecture and databases. I work professionally with React, Next.js, Node.js, TypeScript, Tailwind CSS, Axios and MongoDB, taking a project from zero to deployment on my own."
              )}
            </p>
            <p className="mb-4 text-[1.02rem] text-textDim">
              {t(
                "در کنار دنیای جاوااسکریپت، روی وردپرس هم مسلطم؛ با المنتور، ووکامرس و قالب WoodMart فروشگاه می‌سازم و با تخصص در سئوی داخلی، خارجی، تکنیکال و محلی، کاری می‌کنم که سایت واقعاً دیده بشه، نه فقط ساخته بشه.",
                "Alongside the JavaScript world, I'm just as comfortable in WordPress — building stores with Elementor, WooCommerce and the WoodMart theme, and with expertise across on-page, off-page, technical and local SEO, making sure a site actually gets found, not just built."
              )}
            </p>

            <div className="mt-[30px] flex flex-wrap gap-7 border-t border-line pt-[26px]">
              <Stat value="15+" label={t("مهارت و ابزار", "Skills & Tools")} />
              <Stat value="FE→BE" label={t("فول‌استک واقعی", "True Full-Stack")} />
              <Stat value="SEO" label={t("۴ حوزه تخصصی", "4 Specialties")} />
            </div>
          </RevealOnScroll>

          <RevealOnScroll className="glass overflow-hidden rounded-lg2 shadow-[0_30px_60px_rgba(0,0,0,.5)]">
            <div className="flex items-center gap-2.5 border-b border-line bg-white/[0.03] px-4 py-3">
              <Traffic />
              <span className="mono ms-1 text-[0.78rem] text-textDim">package.json</span>
            </div>
            <div className="mono ltr px-6 py-[26px] text-[0.85rem] leading-[1.95]">
              <span className="tk-punc">{"{"}</span>
              <br />
              &nbsp;&nbsp;<span className="tk-key">&quot;name&quot;</span>
              <span className="tk-punc">:</span>{" "}
              <span className="tk-str">&quot;moein-fayegh&quot;</span>
              <span className="tk-punc">,</span>
              <br />
              &nbsp;&nbsp;<span className="tk-key">&quot;dependencies&quot;</span>
              <span className="tk-punc">:</span> <span className="tk-punc">{"{"}</span>
              <br />
              {DEPS.map(([key, val], i) => (
                <div key={key}>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="tk-key">&quot;{key}&quot;</span>
                  <span className="tk-punc">:</span>{" "}
                  <span className="tk-num">&quot;{val}&quot;</span>
                  {i < DEPS.length - 1 ? <span className="tk-punc">,</span> : ""}
                </div>
              ))}
              &nbsp;&nbsp;<span className="tk-punc">{"}"}</span>
              <br />
              <span className="tk-punc">{"}"}</span>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <b className="font-display block text-[1.9rem] font-normal text-white">{value}</b>
      <span className="text-[0.82rem] text-textFaint">{label}</span>
    </div>
  );
}
