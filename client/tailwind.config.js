const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: [],
  theme: {
    container: {
      center: true,
    },
    minWidth: {
      "11/12": "91.666667%",
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      translate: {
        "11/12": "91.666667%",
      },
      margin: {
        "-11/12": "-91.666667%",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      colors: {
        blue: "#1DA1F2",
        darkblue: "#2795D9",
        darker: "#15202b",
        lightblue: "#EFF9FF",
        dark: "#657786",
        light: "#AAB8C2",
        lighter: "#E1E8ED",
        lightest: "#F5F8FA",
      },
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
  },
  plugins: [],
};
