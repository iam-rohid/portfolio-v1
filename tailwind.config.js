const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  mode: "jit",
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          100: "#F5F8FC",
          800: "#21252D",
          900: "#0C0F12",
        },
        primary: colors.indigo,
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [require("@tailwindcss/typography")],
};
