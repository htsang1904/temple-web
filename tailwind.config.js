/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors"
import theme from "tailwindcss/defaultTheme"
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      'thienquang-dark-purple':'#3d1d32',
      'thienquang-purple':'#8c4e5d',
      'thienquang-blue': '#034ab3',
      'thienquang-light-yellow':'#fff4ec',
      'thienquang-yellow': '#ffefe2',
      'thienquang-brown': '#391e1e',
      'thienquang-white': '#ffffff',
      'thienquang-gray': '#C5C5C5',
      'thienquang-green': '#75CC65',
      'thienquang-black': '#000000',
      'thienquang-light-black': '#141414',
      ...colors,
    },
    extend: {},
  },
  plugins: [],
}

