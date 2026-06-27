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
        primary: {
          DEFAULT: "#00B7B0",
          light: "#14D6CC",
          50: "#f0fdfc",
          100: "#ccfbf1",
        },
        secondary: {
          DEFAULT: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Playfair Display", "Georgia", "serif"],
      },
      animation: {
        "float-y": "floatY 3s ease-in-out infinite",
        "float-y-delay": "floatY 3s ease-in-out infinite 1s",
        "float-y-delay2": "floatY 3s ease-in-out infinite 2s",
        "float-shape": "floatShape 4s ease-in-out infinite",
        "counter-up": "counterUp 2s ease-out forwards",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        floatShape: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-18px) rotate(10deg)" },
        },
      },
      boxShadow: {
        primary: "0 8px 30px rgba(0,183,176,0.25)",
        "primary-lg": "0 16px 50px rgba(0,183,176,0.35)",
        card: "0 4px 24px rgba(0,0,0,0.06)",
        "card-lg": "0 12px 48px rgba(0,0,0,0.10)",
        xl2: "0 20px 60px rgba(0,0,0,0.12)",
      },
      borderRadius: {
        xl2: "20px",
        xl3: "28px",
        xl4: "36px",
      },
    },
  },
  plugins: [],
};

export default config;
