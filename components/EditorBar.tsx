"use client";

import { useEffect, useState } from "react";
import { useLanguage, useT } from "@/components/Providers";

const TABS = [
  { id: "hero", fa: "خانه", en: "Home", ext: "tsx" },
  { id: "about", fa: "درباره من", en: "About", ext: "tsx" },
  { id: "experience", fa: "سابقه کاری", en: "Experience", ext: "log" },
  { id: "skills", fa: "مهارت‌ها", en: "Skills", ext: "json" },
  { id: "projects", fa: "نمونه کار", en: "Projects", ext: "tsx" },
  { id: "contact", fa: "تماس", en: "Contact", ext: "sh" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export default function EditorBar() {
  const t = useT();
  const { toggleLang, lang } = useLanguage();
  const [active, setActive] = useState<TabId>("hero");
  const [docked, setDocked] = useState(false);

  useEffect(() => {
    const sections = TABS.map((tab) => document.getElementById(tab.id));
    const onScroll = () => {
      let current: TabId = TABS[0].id;
      const y = window.scrollY + 120;
      sections.forEach((sec, i) => {
        if (sec && sec.offsetTop <= y) current = TABS[i].id;
      });
      setActive(current);
      setDocked(window.scrollY > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed inset-x-0 top-0 z-[500] flex justify-center transition-all duration-500 ease-out ${
        docked ? "px-3 pt-3 sm:px-6 sm:pt-4" : "px-0 pt-0"
      }`}
    >
      <div
        className={`flex w-full items-center gap-[22px] transition-all duration-500 ease-out ${
          docked
            ? "glass max-w-[900px] rounded-full px-4 shadow-liquid sm:px-6"
            : "max-w-none rounded-none border-b border-white/10 bg-white/[0.04] px-5 backdrop-blur-2xl"
        } h-14`}
      >
        <Traffic />

        <div className="flex flex-1 gap-0.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {TABS.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              className={`flex h-14 flex-none items-center gap-[7px] whitespace-nowrap px-4 text-[0.86rem] font-bold transition-colors ${
                docked ? "" : "border-b-2"
              } ${
                active === tab.id
                  ? docked
                    ? "text-white"
                    : "border-white text-text"
                  : docked
                  ? "text-textDim hover:text-text"
                  : "border-transparent text-textDim hover:bg-white/[0.04] hover:text-text"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 flex-none rounded-full ${
                  active === tab.id ? "bg-white shadow-[0_0_10px_2px_rgba(255,255,255,.7)]" : "bg-textFaint"
                }`}
              />
              <span>{t(tab.fa, tab.en)}</span>
              <span className="mono text-[0.78rem] text-white">.{tab.ext}</span>
            </a>
          ))}
        </div>

        <button
          onClick={toggleLang}
          type="button"
          aria-label="تغییر زبان"
          className="mono flex flex-none items-center gap-1.5 rounded-full border border-line bg-white/5 px-3.5 py-1.5 text-[0.78rem] font-bold text-text transition-colors hover:border-white/50 hover:text-white"
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
      <span className="block h-[11px] w-[11px] rounded-full border border-white/20 bg-white" />
      <span className="block h-[11px] w-[11px] rounded-full border border-white/20 bg-white/60" />
      <span className="block h-[11px] w-[11px] rounded-full border border-white/50 bg-white" />
    </div>
  );
}
