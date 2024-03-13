/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js}",
  ],
  theme: {
    colors: {
      'text': '#1D0202',
      'background': '#FFFFFF',
      'primary': '#FFE41E',
      'secondary': '#D7F581',
      'accent': '#C8A509',
      ...colors,
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}
