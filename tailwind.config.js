/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors"
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        primary: colors.purple,
        secondary: colors.blue
      }
    },
  },
  plugins: [],
};
