"use client";

import { useT } from "@/components/Providers";
import RevealOnScroll from "@/components/RevealOnScroll";

const STACK = [
  { name: "HTML5", fa: "ساختاردهی معنایی و استاندارد صفحات وب", en: "Semantic, standards-based markup for web pages" },
  { name: "CSS3", fa: "استایل‌دهی دقیق، انیمیشن و طراحی واکنش‌گرا", en: "Precise styling, animation and responsive design" },
  { name: "JavaScript", fa: "منطق سمت کلاینت و سرور با پایه‌ای‌ترین زبان وب", en: "Client and server-side logic with the core language of the web" },
  { name: "TypeScript", fa: "کدنویسی امن و بدون خطا با تایپ استاتیک", en: "Safer, error-resistant coding with static typing" },
  { name: "React", fa: "ساخت رابط‌های کاربری پویا، سریع و کاملاً کامپوننت‌محور", en: "Building dynamic, fast, fully component-based interfaces" },
  { name: "Next.js", fa: "اپلیکیشن‌های فول‌استک با رندر سمت سرور برای سرعت و سئوی بهتر", en: "Full-stack apps with server-side rendering for speed and SEO" },
  { name: "Redux", fa: "مدیریت متمرکز و قابل‌پیش‌بینی وضعیت اپلیکیشن", en: "Centralized, predictable application state management" },
  { name: "Tailwind CSS", fa: "طراحی رابط کاربری سریع و کاملاً واکنش‌گرا", en: "Fast, fully responsive UI design" },
  { name: "Axios", fa: "ارتباط پایدار و مدیریت‌شده بین فرانت‌اند و سرور", en: "Reliable, well-managed front-end/back-end communication" },
  { name: "Node.js", fa: "سرویس‌ها و API های سمت سرور امن، سریع و مقیاس‌پذیر", en: "Secure, fast and scalable back-end services and APIs" },
  { name: "Express.js", fa: "ساخت سریع API و سرویس‌های بک‌اند روی Node.js", en: "Rapidly building APIs and back-end services on Node.js" },
  { name: "Go", fa: "توسعه سرویس‌های بک‌اند سریع و کارآمد", en: "Building fast, efficient back-end services" },
  { name: "Python", fa: "اسکریپت‌نویسی، اتوماسیون و توسعه بک‌اند", en: "Scripting, automation and back-end development" },
  { name: "MongoDB", fa: "طراحی و مدیریت پایگاه داده‌های NoSQL مقیاس‌پذیر", en: "Designing and managing scalable NoSQL databases" },
  { name: "PostgreSQL", fa: "طراحی و مدیریت پایگاه داده‌های رابطه‌ای قدرتمند", en: "Designing and managing powerful relational databases" },
  { name: "MySQL", fa: "پیاده‌سازی و مدیریت پایگاه داده‌های رابطه‌ای رایج", en: "Implementing and managing widely-used relational databases" },
  { name: "SQLite", fa: "پایگاه داده سبک برای پروژه‌های کوچک و توسعه سریع", en: "Lightweight database for small projects and rapid development" },
];

const DEVOPS = [
  { name: "Git & GitHub", fa: "مدیریت نسخه، کار تیمی و بررسی کد", en: "Version control, team collaboration and code review" },
  { name: "Docker", fa: "بسته‌بندی و اجرای یکسان اپلیکیشن روی هر محیط", en: "Packaging and running apps consistently across environments" },
  { name: "Vercel", fa: "استقرار سریع و خودکار پروژه‌های Next.js", en: "Fast, automated deployment of Next.js projects" },
  { name: "Netlify", fa: "استقرار و میزبانی سریع پروژه‌های فرانت‌اند", en: "Quick deployment and hosting for front-end projects" },
];

const WP = [
  { name: "WordPress", fa: "ساخت، شخصی‌سازی و مدیریت کامل سایت‌های وردپرسی", en: "Building, customizing and fully managing WordPress sites" },
  { name: "Elementor", fa: "طراحی صفحات حرفه‌ای بدون کدنویسی با درگ اند دراپ", en: "Professional page design without code, drag-and-drop" },
  { name: "WooCommerce", fa: "راه‌اندازی فروشگاه آنلاین از صفر تا اتصال درگاه پرداخت", en: "Setting up an online store from scratch to payment gateway" },
  { name: "WoodMart", fa: "سفارشی‌سازی کامل قالب فروشگاهی WoodMart", en: "Fully customizing the WoodMart store theme" },
];

const SEO = [
  { name: "سئوی داخلی", nameEn: "On-Page SEO", fa: "بهینه‌سازی محتوا، عنوان‌ها و ساختار صفحات برای رتبه بهتر در گوگل", en: "Optimizing content, titles and page structure for better rankings" },
  { name: "سئوی خارجی", nameEn: "Off-Page SEO", fa: "لینک‌سازی و افزایش اعتبار دامنه", en: "Link building and boosting domain authority" },
  { name: "سئوی تکنیکال", nameEn: "Technical SEO", fa: "سرعت، ایندکس‌شدن و ساختار فنی سایت", en: "Speed, indexing and technical site structure" },
  { name: "سئوی محلی", nameEn: "Local SEO", fa: "دیده‌شدن کسب‌وکار در جستجوهای محلی و گوگل مپ", en: "Visibility in local search and Google Maps" },
];

export default function Skills() {
  const t = useT();

  return (
    <section id="skills" className="relative overflow-hidden py-[120px]">
      <div className="section-divider absolute inset-x-0 top-0" />
      <div className="glow-blob -left-[120px] bottom-0 h-[420px] w-[420px] bg-white opacity-[.05]" />
      <div className="relative z-10 mx-auto max-w-[1180px] px-6">
        <span className="mono ltr mb-[18px] inline-flex items-center gap-2 text-[0.8rem] text-textFaint before:content-['//'] before:text-white/80">
          ~/moein-fayegh/skills.json
        </span>
        <h2 className="font-display heading-pop mb-3.5 text-[clamp(2rem,4.4vw,3.4rem)] font-normal text-white">
          {t("مهارت‌ها و تخصص‌ها", "Skills & Expertise")}
        </h2>
        <p className="mb-12 max-w-[640px] text-textDim">
          {t(
            "ابزارها و تخصص‌هایی که برای ساخت و رشد یک سایت از پایه تا دیده‌شدن در گوگل استفاده می‌کنم.",
            "The tools and expertise I use to build a website from the ground up and get it seen on Google."
          )}
        </p>

        <div className="flex flex-col gap-14">
          <RevealOnScroll>
            <GroupLabel text="01 · frontend & backend" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {STACK.map((s) => (
                <SkillCard key={s.name} name={s.name} desc={t(s.fa, s.en)} />
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <GroupLabel text="02 · wordpress & ecommerce" />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {WP.map((s) => (
                <SkillCard key={s.name} name={s.name} desc={t(s.fa, s.en)} />
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <GroupLabel text="03 · seo & growth" />
            <div className="glass rounded-md2 px-6 py-2 sm:px-[26px]">
              {SEO.map((s, i) => (
                <div
                  key={s.name}
                  className={`flex flex-wrap items-baseline gap-3 py-3 text-[0.94rem] ${
                    i < SEO.length - 1 ? "border-b border-lineSoft" : ""
                  }`}
                >
                  <span className="mono ltr text-white">✓</span>
                  <span className="font-bold text-text">{t(s.name, s.nameEn)}</span>
                  <span className="text-[0.87rem] text-textDim">— {t(s.fa, s.en)}</span>
                </div>
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <GroupLabel text="04 · ui/ux & devops" />
            <p className="mb-4 max-w-[640px] text-[0.9rem] text-textDim">
              {t(
                "طراحی UI/UX و انجام کامل کدنویسی Frontend و Backend همراه با اتصال دیتابیس، به‌علاوه ابزارهای استقرار و مدیریت نسخه.",
                "UI/UX design and end-to-end Frontend and Backend development with database integration, plus deployment and version-control tooling."
              )}
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {DEVOPS.map((s) => (
                <SkillCard key={s.name} name={s.name} desc={t(s.fa, s.en)} />
              ))}
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <GroupLabel text="05 · language" />
            <div className="glass rounded-md2 px-6 py-4 sm:px-[26px]">
              <div className="flex flex-wrap items-baseline gap-3 text-[0.94rem]">
                <span className="mono ltr text-white">✓</span>
                <span className="font-bold text-text">{t("زبان انگلیسی", "English")}</span>
                <span className="text-[0.87rem] text-textDim">
                  —{" "}
                  {t(
                    "مسلط در سطح C1، دارای مدرک TTC و TTC IELTS",
                    "Fluent at C1 level, holder of TTC and TTC IELTS certificates"
                  )}
                </span>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}

function GroupLabel({ text }: { text: string }) {
  return (
    <div className="mono ltr mb-4 flex items-center gap-2.5 text-[0.82rem] text-textFaint">
      {text}
      <span className="h-px flex-1 bg-line" />
    </div>
  );
}

function SkillCard({ name, desc }: { name: string; desc: string }) {
  return (
    <div className="glass rounded-md2 p-5 pb-[22px] transition-all hover:-translate-y-1 hover:border-white/50 hover:shadow-liquidSm">
      <h4 className="mb-2 flex items-center gap-2 text-[1.02rem] font-bold">
        <span className="h-2 w-2 flex-none rounded-sm bg-white" />
        {name}
      </h4>
      <p className="text-[0.87rem] text-textDim">{desc}</p>
    </div>
  );
}
