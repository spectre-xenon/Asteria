import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      inter: ["Inter", "sans-serif"],
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      grey: "#ABABAB",
      accent: "#FBCBFB",
      card: "#262626",
      cart: "#E8E8E8",
      lighterGery: "#D9D9D9",
      scrollThumb: "#434343",
    },
    animation: {
      "pulse-slow": "pulse 6s ease-in-out infinite",
    },
    extend: {
      gridTemplateColumns: {
        "auto-fit-100": "repeat(auto-fit, minmax(250px, 1fr))",
      },
      transitionTimingFunction: {
        "out-cubic": "cubic-bezier(0.33, 1, 0.68, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
