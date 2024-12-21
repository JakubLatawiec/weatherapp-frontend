import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        russo: ["var(--font-russo)"],
        chakra: ["var(--font-chakra)"]
      },
      colors: {
      },
    },
  },
  plugins: [],
} satisfies Config;