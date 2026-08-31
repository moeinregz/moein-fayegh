import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#000000",
        panel: "#0a0a0a",
        panel2: "#101010",
        panel3: "#161616",
        line: "rgba(255,255,255,.14)",
        lineSoft: "rgba(255,255,255,.07)",
        neon: "#b026ff",
        neon2: "#7000ff",
        neonSoft: "rgba(176,38,255,.5)",
        rose: "#ff5577",
        text: "#ffffff",
        textDim: "#b7b7c2",
        textFaint: "#6a6a75",
        // legacy aliases kept so nothing silently breaks
        amber: "#ffffff",
        mint: "#b026ff",
        violet: "#b026ff",
      },
      fontFamily: {
        sans: ["var(--font-vazirmatn)", "sans-serif"],
        display: ["var(--font-lalezar)", "var(--font-vazirmatn)", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      borderRadius: {
        lg2: "26px",
        md2: "18px",
        sm2: "11px",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(176,38,255,.35), 0 0 40px rgba(176,38,255,.25), 0 0 90px rgba(176,38,255,.12)",
        glowSm: "0 0 0 1px rgba(176,38,255,.3), 0 0 18px rgba(176,38,255,.28)",
        glowWhite: "0 0 40px rgba(255,255,255,.12)",
      },
      keyframes: {
        blink: { "50%": { opacity: "0" } },
        termIn: { to: { opacity: "1" } },
        pulseGlow: {
          "0%,100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.06)" },
        },
        floatY: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
        termIn: "termIn .45s ease forwards",
        pulseGlow: "pulseGlow 4.5s ease-in-out infinite",
        floatY: "floatY 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
