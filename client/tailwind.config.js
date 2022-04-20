module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/xtendui/src/*.mjs'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  presets: [
    require('tailwindcss/defaultConfig'), require('xtendui/tailwind.preset'),
  ],

}
