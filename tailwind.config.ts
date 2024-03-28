import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      height: {
        page: "calc(100dvh - 60px)",
      },
      animation: {
        "hard-wrap": "warn 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        rotate: "rotate .1s linear forwards",
        "rotate-reverse": "rotateReverse .1s linear forwards",
      },
      keyframes: {
        warn: {
          "0%": { borderColor: "rgb(220, 38, 38)" },
          "50%": { borderColor: "transparent" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-90deg)" },
        },
        rotateReverse: {
          "0%": { transform: "rotate(-90deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
