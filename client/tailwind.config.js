const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'xs': '425px',
      ...defaultTheme.screens
    },
    extend: {
      colors: {
        gray: colors.neutral,
        theme: {
          lightGray: "#D6D8D8",
          gray: "#ADADAD",
          darkGray: "#363C3C",
        }
      },
    },
  },
  plugins: [],
}
