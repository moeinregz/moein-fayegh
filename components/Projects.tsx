"use client";

import { useT } from "@/components/Providers";
import { Traffic } from "@/components/EditorBar";
import RevealOnScroll from "@/components/RevealOnScroll";

const PROJECTS = [
  {
    url: "https://apbeauty.ir/",
    domain: "apbeauty.ir",
    initials: "AP",
    gradient: "from-[#2a1240] to-[#3a1650]",
    titleFa: "AP Beauty — فروشگاه لوازم آرایشی",
    titleEn: "AP Beauty — Cosmetics Store",
    descFa: "فروشگاه حرفه‌ای محصولات آرایشی با رابط کاربری اختصاصی",
    descEn: "A professional beauty products store with a custom UI",
  },
  {
    url: "https://gharchroom.com",
    domain: "gharchroom.com",
    initials: "GR",
    gradient: "from-[#12241a] to-[#163420]",
    titleFa: "Gharchroom — فروش تجهیزات پرورش قارچ",
    titleEn: "Gharchroom — Mushroom Equipment Store",
    descFa: "فروشگاه آنلاین تجهیزات پرورش قارچ با تجربه کاربری روان",
    descEn: "Online store for mushroom cultivation gear with a smooth UX",
  },
  {
    url: "https://style-pikaso.vercel.app/",
    domain: "style-pikaso.vercel.app/",
    initials: "SP",
    gradient: "from-[#241230] to-[#301640]",
    titleFa: "StylePikaso — فروشگاه پوشاک",
    titleEn: "StylePikaso — Clothing Store",
    descFa: "فروشگاه لباس با React، Node.js، Tailwind و TypeScript",
    descEn: "Clothing store built with React, Node.js, Tailwind and TypeScript",
  },
];

export default function Projects() {
  const t = useT();

  return (
    <section id="projects" className="relative py-[110px]">
      <div className="mx-auto max-w-[1180px] px-6">
        <span className="mono ltr mb-[18px] inline-flex items-center gap-2 text-[0.8rem] text-textFaint before:content-['//'] before:text-amber">
          ~/moein-fayegh/projects.tsx
        </span>
        <h2 className="mb-3.5 text-[clamp(1.7rem,3.4vw,2.6rem)] font-extrabold">
          {t("نمونه کارها", "Projects")}
        </h2>
        <p className="mb-12 max-w-[640px] text-textDim">
          {t("چند پروژه‌ی واقعی که طراحی و توسعه دادم.", "A few real projects I've designed and built.")}
        </p>

        <RevealOnScroll className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((p) => (
            <a
              key={p.domain}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col overflow-hidden rounded-lg2 border border-line bg-panel transition-all hover:-translate-y-1.5 hover:border-amber hover:shadow-[0_20px_40px_rgba(255,180,84,.14)]"
            >
              <div className="flex items-center gap-2.5 border-b border-line bg-panel2 px-3.5 py-[11px]">
                <Traffic />
                <div className="mono ltr flex-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-full bg-ink px-3 py-1.5 text-[0.76rem] text-textFaint">
                  {p.domain}
                </div>
              </div>
              <div className={`flex h-[150px] items-center justify-center bg-gradient-to-br ${p.gradient}`}>
                <span className="mono ltr text-[1.3rem] font-bold text-white/55">{p.initials}</span>
              </div>
              <div className="flex flex-1 flex-col p-5 pb-6">
                <h3 className="mb-2 text-[1.08rem] font-bold">{t(p.titleFa, p.titleEn)}</h3>
                <p className="mb-[18px] flex-1 text-[0.87rem] text-textDim">{t(p.descFa, p.descEn)}</p>
                <span className="mono ltr inline-flex items-center gap-1.5 text-[0.83rem] font-semibold text-amber transition-all group-hover:gap-2.5">
                  <span aria-hidden>→</span>
                  {t("مشاهده سایت", "View Website")}
                </span>
              </div>
            </a>
          ))}
        </RevealOnScroll>
      </div>
    </section>
  );
}
