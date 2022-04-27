module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    './node_modules/xtendui/src/*.mjs'
  ],
  theme: {
    extend: {
      fontFamily: {
       PTSans: ["PT Sans", "sans-serif"],
      },
    },
  }, 
  plugins: [],
  presets: [
    require('tailwindcss/defaultConfig'), require('xtendui/tailwind.preset'),
  ],

}
