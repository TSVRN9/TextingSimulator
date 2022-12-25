/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito', 'sans-serif']
      }
    },
  },
  plugins: [require('tailwindcss-animation-delay')],
}