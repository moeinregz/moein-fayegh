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
    <section id="experience" className="relative py-[110px]">
      <div className="mx-auto max-w-[1180px] px-6">
        <span className="mono ltr mb-[18px] inline-flex items-center gap-2 text-[0.8rem] text-textFaint before:content-['//'] before:text-amber">
          ~/moein-fayegh/experience.log
        </span>
        <h2 className="mb-3.5 text-[clamp(1.7rem,3.4vw,2.6rem)] font-extrabold">
          {t("سابقه کاری", "Work Experience")}
        </h2>
        <p className="mb-12 max-w-[640px] text-textDim">
          {t(
            "مسیر حرفه‌ای من در تیم‌های مختلف، از فرانت‌اند تا فول‌استک و سئو.",
            "My professional path across different teams, from front-end to full-stack and SEO."
          )}
        </p>

        <div className="relative flex flex-col gap-5 border-r border-line pr-8 sm:pr-10">
          {JOBS.map((job, i) => (
            <RevealOnScroll key={job.companyEn}>
              <div className="relative rounded-md2 border border-line bg-panel p-5 pb-[22px] transition-all hover:-translate-y-1 hover:border-violet hover:shadow-[0_16px_30px_rgba(183,148,246,.14)]">
                <span className="absolute top-6 -right-[calc(2rem+5px)] h-2.5 w-2.5 rounded-full bg-amber sm:-right-[calc(2.5rem+5px)]" />
                <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-[1.05rem] font-bold text-text">
                    {t(job.company, job.companyEn)}
                  </h4>
                  <span className="mono ltr rounded-full border border-line px-2.5 py-1 text-[0.76rem] text-amber">
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
