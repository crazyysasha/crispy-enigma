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
        "Primary": {
          "0": "#ffffff",
          "100": "#dce4ff",
          "200": "#bac8ff",
          "300": "#98abff",
          "400": "#7e95ff",
          "500": "#546fff", /* color for 'button_purple' */
          "600": "#3d53db",
          "700": "#2a3bb7",
          "800": "#1a2793",
          "900": "#10197a"
         },
         "Success": {
          "100": "#f5fcd2",
          "200": "#e8faa6",
          "300": "#d3f178",
          "400": "#bce455",
          "500": "#9cd323",
          "600": "#7fb519",
          "700": "#659711",
          "800": "#4c7a0b",
          "900": "#3b6506"
         },
         "Error": {
          "100": "#ffe7d3",
          "200": "#ffc8a6",
          "300": "#ffa37a",
          "400": "#ff7f59",
          "500": "#ff4423",
          "600": "#db2719",
          "700": "#b71112",
          "800": "#930b16",
          "900": "#7a0619"
         },
         "Warning": {
          "100": "#fff8d7",
          "200": "#ffefb0",
          "300": "#ffe488",
          "400": "#ffd96b",
          "500": "#ffc73a",
          "600": "#dba32a",
          "700": "#b7821d",
          "800": "#936312",
          "900": "#7a4d0b"
         },
         "Information": {
          "100": "#dcf3ff",
          "200": "#bae5ff",
          "300": "#98d3ff",
          "400": "#7ec2ff",
          "500": "#54a6ff",
          "600": "#3d81db",
          "700": "#2a60b7",
          "800": "#1a4393",
          "900": "#102e7a"
         },
         "Secondary": {
          "100": "#dfe1f3",
          "200": "#c2c6e8",
          "300": "#8e92bc", /* color for 'text_purple' */
          "400": "#54577a",
          "500": "#141522", /* color for 'sidebar_gray_hover' */
          "600": "#0e0f1d",
          "700": "#0a0a18",
          "800": "#060713",
          "900": "#030410",
      },
      }
    },
  },
  plugins: [],
}

