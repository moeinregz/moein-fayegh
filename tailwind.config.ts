import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0a0c16",
        panel: "#131628",
        panel2: "#1a1e36",
        panel3: "#1f2440",
        line: "rgba(255,255,255,.09)",
        lineSoft: "rgba(255,255,255,.05)",
        amber: "#ffb454",
        mint: "#6ee7b7",
        violet: "#b794f6",
        rose: "#ff8a9b",
        text: "#eef1fa",
        textDim: "#9aa1c0",
        textFaint: "#5c6284",
      },
      fontFamily: {
        sans: ["var(--font-vazirmatn)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderRadius: {
        lg2: "20px",
        md2: "14px",
        sm2: "9px",
      },
      keyframes: {
        blink: { "50%": { opacity: "0" } },
        termIn: { to: { opacity: "1" } },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
        termIn: "termIn .45s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
