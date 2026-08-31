"use client";

import { useT } from "@/components/Providers";
import RevealOnScroll from "@/components/RevealOnScroll";
import { XMark } from "@/components/XMark";

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
    <section id="experience" className="bg-arl-red bg-xmarks arl-seam-top relative overflow-hidden py-[120px]">
      <XMark className="x-watermark-dark -right-16 top-4 h-[320px] w-[320px] rotate-[14deg]" />
      <XMark className="x-watermark-dark -left-10 bottom-0 h-[190px] w-[190px] -rotate-[8deg]" />

      <div className="relative z-10 mx-auto max-w-[1180px] px-6">
        <span className="mono ltr mb-[18px] inline-flex items-center gap-2 text-[0.8rem] text-textFaint before:content-['//'] before:text-bone/80">
          ~/moein-fayegh/experience.log
        </span>
        <h2 className="font-display heading-pop mb-3.5 flex items-center gap-3 text-[clamp(2rem,4.4vw,3.4rem)] font-normal text-bone">
          <XMark className="glow-blood h-6 w-6 flex-none text-bloodBright sm:h-8 sm:w-8" />
          {t("سابقه کاری", "Work Experience")}
        </h2>
        <p className="mb-12 max-w-[640px] text-textDim">
          {t(
            "مسیر حرفه‌ای من در تیم‌های مختلف، از فرانت‌اند تا فول‌استک و سئو.",
            "My professional path across different teams, from front-end to full-stack and SEO."
          )}
        </p>

        <div className="relative flex flex-col gap-5 border-r-2 border-steel/25 pr-8 sm:pr-10">
          {JOBS.map((job, i) => (
            <RevealOnScroll key={job.companyEn}>
              <div className="glass relative rounded-md2 p-5 pb-[22px] transition-all hover:-translate-y-1 hover:border-blood/50 hover:shadow-liquidSm">
                <span className="absolute top-6 -right-[calc(2rem+6px)] h-3 w-3 rounded-full bg-bloodBright sm:-right-[calc(2.5rem+6px)]" />
                <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
                  <h4 className="text-[1.05rem] font-extrabold text-text">
                    {t(job.company, job.companyEn)}
                  </h4>
                  <span className="mono ltr rounded-full border border-steel/25 px-2.5 py-1 text-[0.76rem] text-bone">
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
