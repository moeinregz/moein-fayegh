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
        line: "rgba(255,255,255,.16)",
        lineSoft: "rgba(255,255,255,.08)",
        rose: "#ff2d47",
        text: "#ffffff",
        textDim: "#b7b7c2",
        textFaint: "#6a6a75",
        // accent palette — blood red / bone white / ink black, pulled from the
        // character reference: crimson sleeve + claws, white-grey hair & coat, black base
        blood: "#c31432",
        bloodBright: "#ff2440",
        bloodDeep: "#7a0d20",
        bone: "#e9e6e0",
        // legacy aliases kept so nothing silently breaks
        amber: "#ffffff",
        mint: "#ffffff",
        violet: "#ffffff",
        neon: "#ffffff",
        neon2: "#ffffff",
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
        liquid:
          "0 24px 60px rgba(0,0,0,.6), inset 0 1px 0 rgba(255,255,255,.35), inset 0 -22px 30px -22px rgba(255,255,255,.06)",
        liquidSm:
          "0 10px 26px rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.3)",
        glowWhite: "0 0 50px rgba(255,255,255,.14)",
        glowBlood: "0 0 50px rgba(195,20,50,.35)",
        liquidBlood:
          "0 24px 60px rgba(0,0,0,.6), 0 0 0 1px rgba(195,20,50,.18), inset 0 1px 0 rgba(255,255,255,.25)",
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
