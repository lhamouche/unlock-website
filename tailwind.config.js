/** @type {import('tailwindcss').Config} */
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
    },
    fontFamily: {
      poppins: ["Poppins", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
}

