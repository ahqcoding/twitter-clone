const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    container: {
      center: true,
    },
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: "#1DA1F2",
        darkblue: "#2795D9",
        lightblue: "#EFF9FF",
        dark: "#657786",
        light: "#AAB8C2",
        lighter: "#E1E8ED",
        lightest: "#F5F8FA",
      },
    },
  },
  variants: {},
  plugins: [],
};
