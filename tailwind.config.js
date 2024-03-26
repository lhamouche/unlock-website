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
    },
    extend: {
      colors: {
        'text': '#1D0202',
        'background': '#FFFFFF',
        'primary': '#FFE41E',
        'secondary': '#D7F581',
        'accent': '#C8A509',
      },
      rotate: {
        '18': '18deg',
      },
    },
  },
  plugins: [],
}
