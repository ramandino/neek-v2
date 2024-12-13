/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"], // Adjust paths to your files
  darkMode: 'class', // Optional: Enables dark mode with a class
  theme: {
    extend: {
      colors: {
        amarilloneek: "#CB9F47",
        azuloscuro: "#0D101A",
      },
    },
  },
  plugins: [
    require('flowbite/plugin'), // Add plugins here
  ],
};
