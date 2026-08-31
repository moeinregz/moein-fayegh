"use client";

import { useT } from "@/components/Providers";

export default function Footer() {
  const t = useT();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden py-9 text-center">
      <p className="mono ltr pt-4 text-[0.8rem] text-textFaint">
        © {year} moein-fayegh —{" "}
        {t("ساخته‌شده با React ذهنیت، کدنویسی‌شده با عشق", "Built with a React mindset, coded with love")}
      </p>
    </footer>
  );
}
