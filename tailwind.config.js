/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
          'banner1': "url('./images/banner1.png')",
          
        }
      },
    },
    plugins: [],
  }