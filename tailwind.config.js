const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx,svg}"],
  mode: "jit",
  theme: {
    extend: {
      fontFamily: {
        //You can change this up but we generally use serif for top level heading/primary typeface of most brands. Treat this in terms of nomenclature not function
        serif: ["FoundersGrotesk", "sans-serif"],
        sans: ["NeuePlak", "sans-serif"],
      },

      colors: {
        primary: {
          DEFAULT: "#121212",
          100: "#FFFFFF",
          200: "#FBFBFB",
          300: "#EFEFEF",
          400: "#DDDDDD",
          500: "#C6C6C6",
          600: "#999999",
          700: "#BBBBBB",
          800: "#868686",
          900: "#444444",
          1000: "#1F1F1F",
          1100: "#171616",
        },
        secondary: {
          DEFAULT: "#FFCC00",
          100: "#FFFAE6",
          200: "#FFF0B3",
          300: "#FFE680",
          400: "#FFDB4D",
          500: "#CCA300",
          600: "#997A00",
          700: "#665200",
          800: "#332900",
        },
        alternative: {
          DEFAULT: "#008ADC",
          100: "#E6F3FC",
          200: "#B3DCF5",
          300: "#80C5EE",
          400: "#4DADE7",
          500: "#00619A",
          600: "#00456E",
          700: "#002942",
          800: "#000E16",
        },
        action: {
          success: "#36CC4F",
          error: {
            DEFAULT: "#FF0000",
            light: "#FBEEF3",
          },
        },
      },

      boxShadow: {
        subMenu: " 0px 4px 100px rgba(41, 45, 50, 0.09)",
      },
    },

    screens: {
      xs: "450px",
      ...defaultTheme.screens,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
