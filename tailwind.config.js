const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        mirage: {
          50: "#f3f3f4",
          100: "#e7e8e9",
          200: "#c4c5c9",
          300: "#a0a3a9",
          400: "#585d68",
          500: "#111827",
          600: "#0f1623",
          700: "#0d121d",
          800: "#0a0e17",
          900: "#080c13",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
