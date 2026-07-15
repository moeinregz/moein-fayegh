"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";

export type Lang = "fa" | "en";

interface LanguageContextValue {
  lang: Lang;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export default function Providers({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("fa");

  // Load saved preference after mount (avoids SSR/client mismatch)
  useEffect(() => {
    const saved = window.localStorage.getItem("site-lang") as Lang | null;
    if (saved === "en" || saved === "fa") setLang(saved);
  }, []);

  // Keep <html> attributes in sync with the chosen language
  useEffect(() => {
    const html = document.documentElement;
    html.lang = lang;
    html.dir = lang === "fa" ? "rtl" : "ltr";
    document.body.style.direction = lang === "fa" ? "rtl" : "ltr";
    window.localStorage.setItem("site-lang", lang);
  }, [lang]);

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "fa" ? "en" : "fa"));
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within <Providers>");
  return ctx;
}

/** Tiny helper: pick fa/en text based on current language */
export function useT() {
  const { lang } = useLanguage();
  return (fa: string, en: string) => (lang === "fa" ? fa : en);
}
