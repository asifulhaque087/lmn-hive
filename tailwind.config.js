const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {

      xxs: "275px",
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        "main-yellow": "#FFC93E",
        "dark-yellow": "#725114",
        "dark-blue": "#111D5E",
      },
    },
  },
  plugins: [],
};
