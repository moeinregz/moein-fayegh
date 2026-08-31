"use client";

import { useState } from "react";
import { useT } from "@/components/Providers";
import { Traffic } from "@/components/EditorBar";
import RevealOnScroll from "@/components/RevealOnScroll";
import { XMark } from "@/components/XMark";

const SAMPLE_PREVIEW_COUNT = 5;

const FEATURED_PROJECTS = [
  {
    url: "https://asllmarket.ir/",
    domain: "asllmarket.ir",
    initials: "AM",
    gradient: "bg-[#22331a]",
    titleFa: "اصل مارکت — فروشگاه اینترنتی",
    titleEn: "Asll Market — Online Store",
    descFa: "پلتفرم فروشگاهی با رابط کاربری اختصاصی و تجربه خرید روان",
    descEn: "An e-commerce platform with a custom UI and smooth shopping experience",
  },
  {
    url: "https://webpikasoo.vercel.app/",
    domain: "web-pikaso.vercel.app/",
    initials: "WP",
    gradient: "bg-[#123a4d]",
    titleFa: "WebPikaso — شرکت برنامه نویسی",
    titleEn: "WebPikaso — Programming Company",
    descFa: "وبسایتی مینیمال با طرح امروزی با Node.js , React",
    descEn: "A minimal website with modern design with Node.js , React",
  },
];

const SAMPLE_PROJECTS = [
  {
    slug: "aamoozeshgah-nava",
    titleFa: "آموزشگاه موسیقی نوا",
    titleEn: "Nava Music School",
    descFa: "وبسایت آموزشگاه موسیقی با معرفی اساتید و دوره‌ها",
    descEn: "A music school site featuring instructors and courses",
  },
  {
    slug: "azmayeshgah-nabz",
    titleFa: "آزمایشگاه تشخیص پزشکی نبض",
    titleEn: "Nabz Medical Diagnostic Lab",
    descFa: "سایت آزمایشگاه تشخیص طبی با نوبت‌دهی آنلاین",
    descEn: "A medical diagnostic lab site with online appointment booking",
  },
  {
    slug: "boutique-laal",
    titleFa: "لعل | بوتیک لباس زنانه",
    titleEn: "Laal — Women's Fashion Boutique",
    descFa: "فروشگاه بوتیک لباس زنانه با طراحی شیک و مینیمال",
    descEn: "A women's clothing boutique with a chic, minimal design",
  },
  {
    slug: "cafe-zemzeme",
    titleFa: "کافه زمزمه",
    titleEn: "Cafe Zemzeme",
    descFa: "وبسایت کافه با معرفی منو و فضای دنج",
    descEn: "A cozy cafe website showcasing the menu and ambiance",
  },
  {
    slug: "chipset-store",
    titleFa: "چیپست | فروشگاه لپ‌تاپ و قطعات کامپیوتر",
    titleEn: "Chipset — Laptop & PC Parts Store",
    descFa: "فروشگاه تخصصی لپ‌تاپ و قطعات کامپیوتر",
    descEn: "A specialized store for laptops and computer parts",
  },
  {
    slug: "clinic-mehregan",
    titleFa: "کلینیک دامپزشکی مهرگان",
    titleEn: "Mehregan Veterinary Clinic",
    descFa: "وبسایت کلینیک دامپزشکی با خدمات و نوبت‌دهی",
    descEn: "A veterinary clinic site with services and appointments",
  },
  {
    slug: "daftar-vekalat",
    titleFa: "دفتر وکالت پارسا و همکاران",
    titleEn: "Parsa & Partners Law Firm",
    descFa: "وبسایت رسمی دفتر وکالت با معرفی حوزه‌های تخصصی",
    descEn: "A law firm website presenting its practice areas",
  },
  {
    slug: "divan-atr",
    titleFa: "دیوان عطر",
    titleEn: "Divan-e Atr — Perfumery",
    descFa: "فروشگاه عطر با هویت بصری الهام‌گرفته از شعر فارسی",
    descEn: "A perfume store with a visual identity inspired by Persian poetry",
  },
  {
    slug: "golgoon-cosmetics",
    titleFa: "گلگون | لوازم آرایشی",
    titleEn: "Golgoon — Cosmetics Store",
    descFa: "فروشگاه اینترنتی لوازم آرایشی و بهداشتی",
    descEn: "An online cosmetics and beauty products store",
  },
  {
    slug: "hotel-bagh-shahi",
    titleFa: "هتل باغ شاهی",
    titleEn: "Hotel Bagh Shahi — Five-Star Resort",
    descFa: "وبسایت اقامتگاه پنج ستاره با رزرو اتاق آنلاین",
    descEn: "A five-star resort site with online room booking",
  },
  {
    slug: "hotel-morvarid-khazar",
    titleFa: "مروارید خزر | هتل بوتیک ساحلی",
    titleEn: "Morvarid Khazar Boutique Hotel",
    descFa: "وبسایت هتل بوتیک ساحلی با گالری تصاویر و رزرو",
    descEn: "A beachfront boutique hotel site with gallery and booking",
  },
  {
    slug: "jadehpeyma-car-rental",
    titleFa: "جاده‌پیما | اجاره خودرو",
    titleEn: "Jadehpeyma — Car Rental",
    descFa: "پلتفرم اجاره خودرو با نمایش ناوگان و قیمت‌ها",
    descEn: "A car rental platform showcasing the fleet and pricing",
  },
  {
    slug: "karvan-bar",
    titleFa: "کاروان‌بار | حمل و نقل و باربری",
    titleEn: "Karvan-Bar — Logistics & Freight",
    descFa: "وبسایت شرکت حمل و نقل و باربری سراسری",
    descEn: "A nationwide freight and logistics company website",
  },
  {
    slug: "karvansara",
    titleFa: "کاروانسرا | آژانس مسافرتی",
    titleEn: "Karvansara Travel Agency",
    descFa: "وبسایت آژانس مسافرتی با تورهای گردشگری",
    descEn: "A travel agency site featuring tour packages",
  },
  {
    slug: "mana-studio",
    titleFa: "استودیو مانا | دکوراسیون داخلی",
    titleEn: "Mana Studio — Interior Design",
    descFa: "وبسایت استودیو طراحی و اجرای دکوراسیون داخلی",
    descEn: "An interior design studio's portfolio website",
  },
  {
    slug: "mobatech-store",
    titleFa: "موباتک | فروشگاه موبایل و لوازم جانبی",
    titleEn: "Mobatech — Mobile Store",
    descFa: "فروشگاه اینترنتی موبایل و لوازم جانبی",
    descEn: "An online mobile phone and accessories store",
  },
  {
    slug: "pargar-safar",
    titleFa: "پرگار | آژانس تور و بلیط",
    titleEn: "Pargar — Tours & Tickets",
    descFa: "آژانس تخصصی فروش تور و بلیط مسافرتی",
    descEn: "A travel agency specializing in tours and ticket sales",
  },
  {
    slug: "pars-tarash",
    titleFa: "پارس‌تراش | ماشین‌سازی صنعتی",
    titleEn: "Pars-Tarash — Industrial Machinery",
    descFa: "وبسایت شرکت ماشین‌سازی و تجهیزات صنعتی",
    descEn: "An industrial machinery and equipment company site",
  },
  {
    slug: "parsgen-pharma",
    titleFa: "پارس‌ژن | داروسازی",
    titleEn: "Parsgen — Pharmaceuticals",
    descFa: "وبسایت شرکت داروسازی با معرفی محصولات",
    descEn: "A pharmaceutical company site presenting its products",
  },
  {
    slug: "physio-center",
    titleFa: "تعادل | مرکز فیزیوتراپی",
    titleEn: "Tabael — Physiotherapy Center",
    descFa: "وبسایت مرکز فیزیوتراپی و توانبخشی",
    descEn: "A physiotherapy and rehabilitation center website",
  },
  {
    slug: "pulad-gym",
    titleFa: "پولاد | باشگاه بدنسازی",
    titleEn: "Pulad Gym",
    descFa: "وبسایت باشگاه بدنسازی با معرفی برنامه‌ها و مربیان",
    descEn: "A gym website presenting programs and trainers",
  },
  {
    slug: "rakhsh-showroom",
    titleFa: "رخش | نمایشگاه خودرو",
    titleEn: "Rakhsh — Car Showroom",
    descFa: "وبسایت نمایشگاه اختصاصی خودرو",
    descEn: "A dedicated car dealership showroom website",
  },
  {
    slug: "saatkade",
    titleFa: "ساعت‌کده | ساعت‌های مکانیکال",
    titleEn: "Saatkadeh — Classic Watches",
    descFa: "فروشگاه ساعت‌های مکانیکال و کلاسیک",
    descEn: "A store for mechanical and classic watches",
  },
  {
    slug: "salmani-osta",
    titleFa: "سلمونی اوستا | پیرایش مردانه",
    titleEn: "Ostad Barbershop",
    descFa: "وبسایت آرایشگاه مردانه با نوبت‌دهی آنلاین",
    descEn: "A men's barbershop site with online booking",
  },
  {
    slug: "sepid-dental",
    titleFa: "سپید | کلینیک دندانپزشکی",
    titleEn: "Sepid Dental Clinic",
    descFa: "وبسایت کلینیک دندانپزشکی با خدمات و نوبت‌دهی",
    descEn: "A dental clinic site with services and appointments",
  },
  {
    slug: "shahd-o-yakh",
    titleFa: "شهد و یخ | آبمیوه و بستنی",
    titleEn: "Shahd-o-Yakh — Juice & Ice Cream",
    descFa: "وبسایت فروشگاه آبمیوه و بستنی‌فروشی",
    descEn: "A juice bar and ice cream shop website",
  },
  {
    slug: "shirini-forushi",
    titleFa: "قنادی زعفران",
    titleEn: "Zafaran Pastry Shop",
    descFa: "وبسایت شیرینی‌سرای سنتی با معرفی محصولات",
    descEn: "A traditional pastry shop showcasing its products",
  },
  {
    slug: "sholeh-fastfood",
    titleFa: "شعله | فست‌فود",
    titleEn: "Sholeh Fast Food",
    descFa: "وبسایت فست‌فود با منوی آنلاین",
    descEn: "A fast-food restaurant site with an online menu",
  },
  {
    slug: "simorgh-restaurant",
    titleFa: "سیمرغ | رستوران سنتی ایرانی",
    titleEn: "Simorgh Persian Restaurant",
    descFa: "وبسایت رستوران سنتی ایرانی با منو و رزرو میز",
    descEn: "A traditional Persian restaurant site with menu and table booking",
  },
  {
    slug: "sneaker-site",
    titleFa: "برق | کفش‌های دویدن",
    titleEn: "Barq — Running Sneakers",
    descFa: "فروشگاه کفش‌های ورزشی و دویدن نسل تازه",
    descEn: "A modern running-shoe store",
  },
  {
    slug: "tanoor-bakery",
    titleFa: "تنور | نانوایی محله",
    titleEn: "Tanoor Neighborhood Bakery",
    descFa: "وبسایت نانوایی محله با معرفی محصولات تازه",
    descEn: "A neighborhood bakery site featuring fresh products",
  },
  {
    slug: "zabankadeh",
    titleFa: "زبانکده | آموزشگاه زبان",
    titleEn: "Zabankadeh Language School",
    descFa: "وبسایت آموزشگاه زبان‌های زنده دنیا",
    descEn: "A language school website for world languages",
  },
  {
    slug: "zarafshan",
    titleFa: "زرافشان | طلا و جواهر",
    titleEn: "Zarafshan — Gold & Jewelry",
    descFa: "فروشگاه طلا و جواهرات لوکس",
    descEn: "A luxury gold and jewelry store",
  },
  {
    slug: "zomorod-melk",
    titleFa: "زمرد | مشاور املاک لوکس",
    titleEn: "Zomorod Luxury Real Estate",
    descFa: "وبسایت مشاور املاک با آگهی‌های لوکس",
    descEn: "A luxury real estate consultancy site with listings",
  },
];

export default function Projects() {
  const t = useT();
  const [showAll, setShowAll] = useState(false);
  const visibleSamples = showAll ? SAMPLE_PROJECTS : SAMPLE_PROJECTS.slice(0, SAMPLE_PREVIEW_COUNT);

  return (
    <section id="projects" className="bg-arl-black bg-xmarks-xl arl-seam-top relative overflow-hidden py-[120px]">
      <div className="bg-hatch absolute inset-0" />
      <XMark className="x-watermark -right-12 top-1/4 h-[300px] w-[300px] rotate-[11deg]" />
      <XMark className="x-watermark -left-20 bottom-0 h-[240px] w-[240px] -rotate-[9deg]" />
      <div className="relative z-10 mx-auto max-w-[1180px] px-6">
        <span className="mono ltr mb-[18px] inline-flex items-center gap-2 text-[0.8rem] text-textFaint before:content-['//'] before:text-bone/80">
          ~/moein-fayegh/projects.tsx
        </span>
        <h2 className="font-display heading-pop mb-3.5 flex items-center gap-3 text-[clamp(2rem,4.4vw,3.4rem)] font-normal text-bone">
          <XMark className="glow-blood h-6 w-6 flex-none text-bloodBright sm:h-8 sm:w-8" />
          {t("نمونه کارها", "Projects")}
        </h2>
        <p className="mb-10 max-w-[640px] text-textDim">
          {t("چند پروژه‌ی واقعی که طراحی و توسعه دادم.", "A few real projects I've designed and built.")}
        </p>

        {/* Featured / live projects */}
        <RevealOnScroll className="mb-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {FEATURED_PROJECTS.map((p) => (
            <a
              key={p.domain}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-strong relative flex flex-col overflow-hidden rounded-lg2 transition-all hover:-translate-y-1.5 hover:shadow-liquid"
            >
              <span className="mono absolute right-4 top-4 z-10 rounded-full border border-blood/60 bg-black/70 px-2.5 py-1 text-[0.7rem] font-bold text-bloodBright">
                {t("پروژه ویژه", "Featured")}
              </span>
              <div className="flex items-center gap-2.5 border-b border-line bg-steel/[0.03] px-3.5 py-[11px]">
                <Traffic />
                <div className="mono ltr flex-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-full bg-black px-3 py-1.5 text-[0.76rem] text-textFaint">
                  {p.domain}
                </div>
              </div>
              <div className={`flex h-[170px] items-center justify-center ${p.gradient}`}>
                <span className="mono ltr text-[1.5rem] font-bold text-bone/55">{p.initials}</span>
              </div>
              <div className="flex flex-1 flex-col p-5 pb-6">
                <h3 className="mb-2 text-[1.12rem] font-bold">{t(p.titleFa, p.titleEn)}</h3>
                <p className="mb-[18px] flex-1 text-[0.87rem] text-textDim">{t(p.descFa, p.descEn)}</p>
                <span className="mono ltr inline-flex items-center gap-1.5 text-[0.83rem] font-semibold text-bone transition-all group-hover:gap-2.5 group-hover:text-bloodBright">
                  <span aria-hidden>→</span>
                  {t("مشاهده سایت", "View Website")}
                </span>
              </div>
            </a>
          ))}
        </RevealOnScroll>

        {/* Sample project gallery */}
        <RevealOnScroll className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visibleSamples.map((p) => (
            <a
              key={p.slug}
              href={`/samples/${p.slug}.html`}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass flex flex-col overflow-hidden rounded-lg2 transition-all hover:-translate-y-1.5 hover:border-blood/50 hover:shadow-liquidSm"
            >
              <div className="flex items-center gap-2.5 border-b border-line bg-steel/[0.03] px-3.5 py-[11px]">
                <Traffic />
                <div className="mono ltr flex-1 overflow-hidden text-ellipsis whitespace-nowrap rounded-full bg-black px-3 py-1.5 text-[0.76rem] text-textFaint">
                  {p.slug}.html
                </div>
              </div>
              <div className="h-[150px] overflow-hidden bg-steel/[0.03]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`/samples/shots/${p.slug}.webp`}
                  alt={t(p.titleFa, p.titleEn)}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 pb-6">
                <h3 className="mb-2 text-[1.08rem] font-bold">{t(p.titleFa, p.titleEn)}</h3>
                <p className="mb-[18px] flex-1 text-[0.87rem] text-textDim">{t(p.descFa, p.descEn)}</p>
                <span className="mono ltr inline-flex items-center gap-1.5 text-[0.83rem] font-semibold text-bone transition-all group-hover:gap-2.5 group-hover:text-bloodBright">
                  <span aria-hidden>→</span>
                  {t("مشاهده نمونه", "View Sample")}
                </span>
              </div>
            </a>
          ))}
        </RevealOnScroll>

        {!showAll && SAMPLE_PROJECTS.length > SAMPLE_PREVIEW_COUNT && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(true)}
              className="mono glass inline-flex items-center gap-2 rounded-sm2 px-7 py-3.5 text-[0.9rem] font-extrabold text-text transition-colors hover:border-blood/60 hover:text-bloodBright"
            >
              {t(
                `مشاهده همه (${SAMPLE_PROJECTS.length})`,
                `View All (${SAMPLE_PROJECTS.length})`
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
