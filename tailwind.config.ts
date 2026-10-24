import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#080C15",
        surface: {
          DEFAULT: "#0F1626",
          elevated: "#151F36",
          subtle: "#0C1220",
          card: "rgba(17, 24, 39, 0.75)",
        },
        primary: {
          DEFAULT: "#3B82F6",
          hover: "#2563EB",
          active: "#1D4ED8",
          glow: "rgba(59, 130, 246, 0.25)",
        },
        accent: {
          DEFAULT: "#6366F1",
          hover: "#4F46E5",
          violet: "#8B5CF6",
        },
        border: {
          subtle: "rgba(255, 255, 255, 0.08)",
          DEFAULT: "rgba(255, 255, 255, 0.12)",
          highlight: "rgba(99, 102, 241, 0.35)",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(59, 130, 246, 0.25)",
        "glow-violet": "0 0 45px -10px rgba(99, 102, 241, 0.25)",
        card: "0 10px 30px -10px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "pulse-subtle": "pulse-subtle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "fade-in": "fadeIn 0.5s ease-out forwards",
      },
      keyframes: {
        "pulse-subtle": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
