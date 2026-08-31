"use client";

import { useT } from "@/components/Providers";
import RevealOnScroll from "@/components/RevealOnScroll";

const JOBS = [
  {
    company: "وب پیکاسو",
    companyEn: "Web Picasso",
    role: "برنامه‌نویس فول‌استک",
    roleEn: "Full-Stack Developer",
    duration: "۲ سال",
    durationEn: "2 years",
  },
  {
    company: "قارچ روم",
    companyEn: "Ghar Room",
    role: "برنامه‌نویس فول‌استک و کارشناس سئو",
    roleEn: "Full-Stack Developer & SEO Specialist",
    duration: "۳ سال",
    durationEn: "3 years",
  },
  {
    company: "طرحفا",
    companyEn: "Tarhfa",
    role: "برنامه‌نویس فرانت‌اند",
    roleEn: "Front-End Developer",
    duration: "۲ سال",
    durationEn: "2 years",
  },
  {
    company: "اصل مارکت",
    companyEn: "Asl Market",
    role: "برنامه‌نویس فول‌استک",
    roleEn: "Full-Stack Developer",
    duration: "۱ سال",
    durationEn: "1 year",
  },
];

export default function Experience() {
  const t = useT();

  return (
    <section id="experience" className="relative overflow-hidden py-[120px]">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="glow-blob -right-[140px] top-10 h-[380px] w-[380px] bg-white opacity-[.05]" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-6">
        <span className="mono ltr mb-[18px] inline-flex items-center gap-2 text-[0.8rem] text-textFaint before:content-['//'] before:text-white/80">
          ~/moein-fayegh/experience.log
        </span>
        <h2 className="font-display heading-pop mb-3.5 text-[clamp(2rem,4.4vw,3.4rem)] font-normal text-white">
          {t("سابقه کاری", "Work Experience")}
        </h2>
        <p className="mb-12 max-w-[640px] text-textDim">
          {t(
            "مسیر حرفه‌ای من در تیم‌های مختلف، از فرانت‌اند تا فول‌استک و سئو.",
            "My professional path across different teams, from front-end to full-stack and SEO."
          )}
        </p>

        <div className="relative flex flex-col gap-5 border-r-2 border-white/25 pr-8 sm:pr-10">
          {JOBS.map((job, i) => (
            <RevealOnScroll key={job.companyEn}>
              <div className="glass relative rounded-md2 p-5 pb-[22px] transition-all hover:-translate-y-1 hover:border-white/50 hover:shadow-liquidSm">
                <span className="absolute top-6 -right-[calc(2rem+6px)] h-3 w-3 rounded-full bg-white shadow-[0_0_14px_4px_rgba(255,255,255,.55)] sm:-right-[calc(2.5rem+6px)]" />
                <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-[1.05rem] font-extrabold text-text">
                    {t(job.company, job.companyEn)}
                  </h4>
                  <span className="mono ltr rounded-full border border-white/25 px-2.5 py-1 text-[0.76rem] text-white">
                    {t(job.duration, job.durationEn)}
                  </span>
                </div>
                <p className="text-[0.9rem] text-textDim">{t(job.role, job.roleEn)}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
