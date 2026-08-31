import type { Metadata } from "next";
import { Vazirmatn, Lalezar, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

// Self-hosted fonts: Next.js downloads these at build time and serves them
// from our own domain. This removes the runtime dependency on
// fonts.googleapis.com, which is frequently unreachable on mobile-data
// connections — that's why the site could load on a computer (behind a
// VPN/proxy) but hang or fail to render text on a phone.
const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const lalezar = Lalezar({
  subsets: ["arabic", "latin"],
  weight: "400",
  variable: "--font-lalezar",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "معین فایق — توسعه‌دهنده فول‌استک",
  description:
    "معین فایق، توسعه‌دهنده فول‌استک با تخصص در React، Next.js، Node.js، وردپرس و سئو.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${vazirmatn.variable} ${lalezar.variable} ${jetbrainsMono.variable}`}
    >
      <body className="dot-grid bg-black font-sans text-white antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
