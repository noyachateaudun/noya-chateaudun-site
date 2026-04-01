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
        burgundy: {
          DEFAULT: "#7B1E2B",
          light: "#9B3344",
          dark: "#5C1620",
        },
        cream: {
          DEFAULT: "#F5EDE3",
          light: "#FAF5EE",
          dark: "#E8DDD0",
        },
        gold: {
          DEFAULT: "#C4883A",
          light: "#D4A85A",
          soft: "#D4B896",
        },
        sage: "#5B8A72",
        terracotta: "#C47D5A",
        dark: "#2C2421",
        taupe: "#6B5E56",
        "warm-white": "#FBF7F1",
        sand: "#EDE0D0",
        caramel: "#A0896E",
        "deep-terra": "#A0613A",
      },
      fontFamily: {
        serif: ["Playfair Display", "serif"],
        body: ["DM Sans", "sans-serif"],
        accent: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
