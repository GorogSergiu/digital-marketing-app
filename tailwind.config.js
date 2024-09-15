import { nextui } from "@nextui-org/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        danger: {
          DEFAULT: "#2EC4B6",
        },
        buttonsColor: {
          DEFAULT: "#FEB775",
        },
        buttonsHover: {
          DEFAULT: "#AE371F",
        },
        headersColor: {
          DEFAULT: "#074978",
        },
        cardBorderColor: {
          DEFAULT: "#074978",
        },
        textColor: {
          DEFAULT: "#6A5E44",
        },
        navbarColor: {
          DEFAULT: "#074978",
        },
        navbarTextColor: {
          DEFAULT: "#FFFFFF",
        },
      },
    },
  },
  darkMode: "class",
  darkMode: "class",
  plugins: [nextui()],
};
