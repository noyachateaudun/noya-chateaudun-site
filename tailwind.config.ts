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
        // Palette 2026 tirée du lieu : brique (logo), terracotta (auvent),
        // zellige (mur), crème, café. Les anciens noms sont conservés pour
        // que toutes les pages suivent sans réécriture.
        burgundy: {
          DEFAULT: "#B82F25",
          light: "#C94A3E",
          dark: "#8E2219",
        },
        brick: "#B82F25",
        zellige: "#2E5A4E",
        ink: "#24180F",
        paper: "#FBF7F0",
        line: "#E3D6C5",
        muted: "#5E4E42",
        cream: {
          DEFAULT: "#EFE4D4",
          light: "#FBF7F0",
          dark: "#E3D6C5",
        },
        gold: {
          DEFAULT: "#C4883A",
          light: "#D4A85A",
          soft: "#D4B896",
        },
        sage: "#2E5A4E",
        terracotta: "#E7A487",
        dark: "#24180F",
        taupe: "#5E4E42",
        "warm-white": "#F6EFE5",
        sand: "#EDE0D0",
        caramel: "#A0896E",
        "deep-terra": "#A0613A",
      },
      fontFamily: {
        serif: ["var(--font-accent)", "Cormorant Garamond", "Georgia", "serif"],
        body: ["var(--font-body)", "DM Sans", "system-ui", "sans-serif"],
        accent: ["var(--font-accent)", "Cormorant Garamond", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
