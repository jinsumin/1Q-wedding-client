/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        hanafont: ["HanaFont"],
        sans: ["HanaFont", "sans-serif"],
      },
    },
  },
  variants: {
    extends: {
      fontFamily: ["hover", "focus"],
    },
  },
  plugins: [],
  corePlugins: {
    fontFamily: true,
  },
};
