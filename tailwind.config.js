const plugin = require('tailwindcss/plugin')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {scale:['group-hover'],display:['group-hover'],backgroundColor: ['active'],boxShadow: ['active'],scale: ['active']},
  },
  plugins: []
}
