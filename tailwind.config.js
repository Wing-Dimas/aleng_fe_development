/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary-red': '#D2001A',
        'secondary-yellow': '#FDD05C',
        'secondary-black': '#252525',
        'dark-grey': '#615A56',
        'light-grey': '#ABACAC',
        'secondary-white': '#FAFAFA',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        jua: ['Jua', 'sans-serif'],
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
