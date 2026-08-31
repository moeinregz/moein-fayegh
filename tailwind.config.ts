import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0c0c0d",
        panel: "#1a1a1c",
        panel2: "#212123",
        panel3: "#2a2a2d",
        line: "rgba(178,176,182,.22)",
        lineSoft: "rgba(178,176,182,.12)",
        rose: "#ff2d47",
        // soft warm bone-grey instead of pure white — easy on the eyes,
        // matches the character's grey hair/coat rather than paper-white
        text: "#d9d6d2",
        textDim: "#9c9aa1",
        textFaint: "#6a686f",
        // accent palette — matte blood red / matte greys, pulled from the
        // character reference: crimson sleeve + claws, ash-grey hair & coat, ink black base
        blood: "#a01128",
        bloodBright: "#c31432",
        bloodDeep: "#5c0c1a",
        bone: "#d9d6d2",
        // grey scale lifted from the hair/coat shading in the reference art
        ash: "#8f8d93",
        steel: "#57565c",
        smoke: "#38373b",
        charcoal: "#242427",
        // legacy aliases kept so nothing silently breaks
        amber: "#d9d6d2",
        mint: "#d9d6d2",
        violet: "#d9d6d2",
        neon: "#d9d6d2",
        neon2: "#d9d6d2",
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
        // flat, hard-edged offset shadows — no blur, no glow, bold & graphic
        liquid: "8px 8px 0 0 rgba(0,0,0,.55)",
        liquidSm: "5px 5px 0 0 rgba(0,0,0,.5)",
        glowWhite: "5px 5px 0 0 rgba(0,0,0,.5)",
        glowBlood: "6px 6px 0 0 #5c0c1a",
        liquidBlood: "8px 8px 0 0 #5c0c1a",
        hard: "6px 6px 0 0 rgba(0,0,0,.55)",
        hardBlood: "6px 6px 0 0 #5c0c1a",
      },
      keyframes: {
        blink: { "50%": { opacity: "0" } },
        termIn: { to: { opacity: "1" } },
        driftGlow: {
          "0%,100%": { opacity: "0.5", transform: "translateY(0) scale(1)" },
          "50%": { opacity: "0.9", transform: "translateY(-14px) scale(1.05)" },
        },
        pulseGlow: {
          "0%,100%": { opacity: "0.65" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        blink: "blink 1s steps(1) infinite",
        termIn: "termIn .45s ease forwards",
        driftGlow: "driftGlow 7s ease-in-out infinite",
        pulseGlow: "pulseGlow 2.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
