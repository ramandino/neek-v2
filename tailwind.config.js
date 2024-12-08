/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  darkMode: 'class',


  theme: {
    extend: {
      colors: {
        amarilloneek: "#CB9F47",
        azuloscuro: "#0D101A"
    },
    
  },
  plugins: [require('flowbite/plugin')],
  }
}  