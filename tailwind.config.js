/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          light: "#34353A",
          dark:"#31333B",
          card:"#F0BF6C"
        },
        secondary:"#FFC86B"
      }
    },
  },
  plugins: [daisyui],
}

