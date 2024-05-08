/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
      raleway: ["Raleway", "sans-serif"],
    },
    extend: {
      screens: {
        'xs': '410px',
      },
      colors: {
        'text': '#1D0202',
        'background': '#FFFFFF',
        'primary': '#FFE41E',
        // 'secondary': '#D7F581',
        // 'secondary': '#A1DDA6',
        // 'secondary': '#E9DD84',
        'secondary': '#FFC86D',
        // 'accent': '#C8A509',
        // 'accent': '#6BC994',
        'accent': '#E9D74E',
        // 'accent': '#F7D797',
      },
      rotate: {
        '18': '18deg',
      },
    },
  },
  plugins: [],
}
