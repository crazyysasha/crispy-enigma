/** @type {import('tailwindcss').Config} */


// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors:{
        'bg_gray_design': '#FAFAFA',
        'text_purple': '#8E92BC',
        'sidebar_gray_hover': '#141522',
        'button_purple': '#546FFF',
      }
    },
  },
  plugins: [],
}

