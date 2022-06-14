/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'blue': '#0E0DB8',
        'lightBlue': '#503FFD'
      },
    },
  },
  plugins: [],
}
