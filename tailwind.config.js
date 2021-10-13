const colors = require('tailwindcss/colors')
module.exports = {
  purge: {
    mode: "layers",
    enabled: process.env.NODE_ENV === 'production',
    content: [
      `components/**/*.{vue,js}`,
      `layouts/**/*.vue`,
      `pages/**/*.vue`,
      `plugins/**/*.{js,ts}`,
      `nuxt.config.{js,ts}`
    ]
  },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "colour1": "#319795",
        "colour2": "#718096",
        "white": "#FFFFFF",
        "colour3": "#2d3748",
        "colour4": "#4a5568",
      }
    },
    width: {
      'mobile': '411px',
    },
    fontFamily: {
      Lato: ["Lato, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}
