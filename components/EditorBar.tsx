"use client";

import { useEffect, useState } from "react";
import { useLanguage, useT } from "@/components/Providers";

const TABS = [
  { id: "hero", fa: "خانه", en: "Home", ext: "tsx", extColor: "text-violet" },
  { id: "about", fa: "درباره من", en: "About", ext: "tsx", extColor: "text-violet" },
  { id: "skills", fa: "مهارت‌ها", en: "Skills", ext: "json", extColor: "text-amber" },
  { id: "projects", fa: "نمونه کار", en: "Projects", ext: "tsx", extColor: "text-violet" },
  { id: "contact", fa: "تماس", en: "Contact", ext: "sh", extColor: "text-mint" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function EditorBar() {
  const t = useT();
  const { toggleLang, lang } = useLanguage();
  const [active, setActive] = useState<TabId>("hero");

  useEffect(() => {
    const sections = TABS.map((tab) => document.getElementById(tab.id));
    const onScroll = () => {
      let current: TabId = TABS[0].id;
      const y = window.scrollY + 120;
      sections.forEach((sec, i) => {
        if (sec && sec.offsetTop <= y) current = TABS[i].id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[500] border-b border-line bg-ink/80 backdrop-blur-2xl">
      <div className="mx-auto flex h-14 max-w-[1180px] items-center gap-[22px] px-5">
        <Traffic />

        <div className="flex flex-1 gap-0.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {TABS.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={`flex h-14 flex-none items-center gap-[7px] whitespace-nowrap border-b-2 px-4 text-[0.86rem] transition-colors ${
                active === tab.id
                  ? "border-amber text-text"
                  : "border-transparent text-textDim hover:bg-white/[0.03] hover:text-text"
              }`}
            >
              <span className="h-1.5 w-1.5 flex-none rounded-full bg-textFaint" />
              <span>{t(tab.fa, tab.en)}</span>
              <span className={`mono text-[0.78rem] ${tab.extColor}`}>.{tab.ext}</span>
            </a>
          ))}
        </div>

        <button
          onClick={toggleLang}
          type="button"
          aria-label="تغییر زبان"
          className="mono flex flex-none items-center gap-1.5 rounded-full border border-line bg-panel px-3.5 py-1.5 text-[0.78rem] font-bold text-text transition-colors hover:border-amber hover:text-amber"
        >
          <span aria-hidden>🌐</span>
          <span>{lang === "fa" ? "EN" : "فا"}</span>
        </button>
      </div>
    </div>
  );
}

export function Traffic() {
  return (
    <div className="ltr flex flex-none gap-[7px]">
      <span className="block h-[11px] w-[11px] rounded-full bg-[#ff5f57]" />
      <span className="block h-[11px] w-[11px] rounded-full bg-[#febc2e]" />
      <span className="block h-[11px] w-[11px] rounded-full bg-[#28c840]" />
    </div>
  );
}
