const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        gray: colors.zinc,
        primary: colors.indigo,
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [require("@tailwindcss/typography")],
};
