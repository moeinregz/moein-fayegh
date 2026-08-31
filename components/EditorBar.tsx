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
  const [menuOpen, setMenuOpen] = useState(false);

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

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleTabClick = () => setMenuOpen(false);

  return (
    <>
      <div
        className={`fixed inset-x-0 top-0 z-[500] flex justify-center transition-all duration-500 ease-out ${
          docked ? "px-3 pt-3 sm:px-6 sm:pt-4" : "px-0 pt-0"
        }`}
      >
        <div
          className={`flex w-full items-center gap-2 transition-all duration-500 ease-out lg:gap-[18px] ${
            docked
              ? "glass max-w-[960px] rounded-full px-3.5 shadow-liquid sm:px-5"
              : "max-w-none rounded-none border-b border-steel/10 bg-steel/[0.04] px-4 sm:px-5"
          } h-14`}
        >
          <Traffic />

          {/* Desktop / tablet nav — every tab + the language button always visible, no scrolling */}
          <div className="hidden min-w-0 flex-1 items-center gap-1 md:flex lg:gap-1.5">
            <div className="flex min-w-0 flex-1 items-center gap-0.5 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {TABS.map((tab) => (
                <a
                  key={tab.id}
                  href={`#${tab.id}`}
                  className={`flex h-14 flex-none items-center gap-[6px] whitespace-nowrap px-2.5 text-[0.8rem] font-bold transition-colors lg:px-3.5 lg:text-[0.86rem] ${
                    docked ? "" : "border-b-2"
                  } ${
                    active === tab.id
                      ? docked
                        ? "text-bone"
                        : "border-bloodBright text-text"
                      : docked
                      ? "text-textDim hover:text-text"
                      : "border-transparent text-textDim hover:bg-steel/[0.04] hover:text-text"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 flex-none rounded-full ${
                      active === tab.id ? "bg-bloodBright" : "bg-textFaint"
                    }`}
                  />
                  <span>{t(tab.fa, tab.en)}</span>
                  <span className="mono hidden text-[0.78rem] text-bloodBright lg:inline">.{tab.ext}</span>
                </a>
              ))}
            </div>

            <button
              onClick={toggleLang}
              type="button"
              aria-label="تغییر زبان"
              className="mono flex flex-none items-center gap-1.5 rounded-full border border-line bg-steel/5 px-3 py-1.5 text-[0.76rem] font-bold text-text transition-colors hover:border-blood/60 hover:text-bloodBright lg:px-3.5 lg:text-[0.78rem]"
            >
              <span aria-hidden>🌐</span>
              <span>{lang === "fa" ? "EN" : "فا"}</span>
            </button>
          </div>

          {/* Mobile — hamburger trigger */}
          <div className="flex flex-1 items-center justify-end gap-2 md:hidden">
            <button
              onClick={toggleLang}
              type="button"
              aria-label="تغییر زبان"
              className="mono flex flex-none items-center gap-1 rounded-full border border-line bg-steel/5 px-2.5 py-1.5 text-[0.72rem] font-bold text-text transition-colors hover:border-blood/60 hover:text-bloodBright"
            >
              <span aria-hidden>🌐</span>
              <span>{lang === "fa" ? "EN" : "فا"}</span>
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              type="button"
              aria-label={menuOpen ? t("بستن منو", "Close menu") : t("باز کردن منو", "Open menu")}
              aria-expanded={menuOpen}
              className="flex h-9 w-9 flex-none flex-col items-center justify-center gap-[5px] rounded-full border border-line bg-steel/5 transition-colors hover:border-blood/60"
            >
              <span
                className={`block h-[2px] w-[16px] rounded-full bg-text transition-all duration-300 ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[2px] w-[16px] rounded-full bg-text transition-all duration-300 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-[2px] w-[16px] rounded-full bg-text transition-all duration-300 ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay + dropdown panel */}
      <div
        className={`fixed inset-0 z-[490] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
      <div
        className={`glass fixed inset-x-3 top-[76px] z-[495] origin-top rounded-lg2 p-2 shadow-liquid transition-all duration-300 ease-out md:hidden ${
          menuOpen ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <nav className="flex flex-col">
          {TABS.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              onClick={handleTabClick}
              className={`flex items-center gap-2.5 rounded-md2 px-4 py-3.5 text-[0.95rem] font-bold transition-colors ${
                active === tab.id ? "bg-blood/[0.12] text-bone" : "text-textDim hover:bg-steel/[0.06] hover:text-text"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 flex-none rounded-full ${
                  active === tab.id ? "bg-bloodBright" : "bg-textFaint"
                }`}
              />
              <span className="flex-1">{t(tab.fa, tab.en)}</span>
              <span className="mono text-[0.78rem] text-bloodBright">.{tab.ext}</span>
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

export function Traffic() {
  return (
    <div className="ltr flex flex-none gap-[7px]">
      <span className="block h-[11px] w-[11px] rounded-full border border-blood/40 bg-bloodBright" />
      <span className="block h-[11px] w-[11px] rounded-full border border-steel/20 bg-steel/50" />
      <span className="block h-[11px] w-[11px] rounded-full border border-steel/50 bg-ash" />
    </div>
  );
}
