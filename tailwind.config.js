/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base — dark zinc/slate foundation
        base: {
          DEFAULT: "#09090b", // zinc-950-ish, true near-black
          surface: "#0f0f12", // card / section bg, 1 step up
          elevated: "#15151a", // elevated cards, modals
          border: "#1f1f25",
        },
        // Accent — Electric Blue (primary tech accent)
        electric: {
          DEFAULT: "#3b82f6",
          glow: "#60a5fa",
          dim: "#1d4ed8",
        },
        // Accent — Emerald (growth / success / CTA secondary)
        growth: {
          DEFAULT: "#10b981",
          glow: "#34d399",
          dim: "#047857",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-lexend)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "monospace"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
        "radial-fade":
          "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.15), transparent 60%)",
      },
      backgroundSize: {
        grid: "32px 32px",
      },
      animation: {
        marquee: "marquee 32s linear infinite",
        "marquee-reverse": "marquee-reverse 32s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "accordion-down": "accordion-down 0.25s ease-out",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        glow: "0 0 40px -8px rgba(59,130,246,0.35)",
        "glow-emerald": "0 0 40px -8px rgba(16,185,129,0.35)",
      },
    },
  },
  plugins: [],
};
