/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
    }
    },

    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        'blue': '#0E0DB8',
        'lightBlue': '#503FFD',
        'lighterBlue': '#FBFAFF',
        'blueGray': '#BAC1FF',
        'orange':'#DF5317',
        'orangeGray':'#FFFBF8',
        'lightOrange':'#FEA18C',

      },
    },
  },
  plugins: [],
}
