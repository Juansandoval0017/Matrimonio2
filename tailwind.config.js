/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gridTemplateColumns:{
        '20': 'repeat(15, minmax(0, 1fr))',
      },
      gridTemplateRows:{
        '20': 'repeat(15, minmax(0, 2.8rem))',
      },
      backgroundImage:{
        'board': 'url("/board.jpg")',
        'capilla': 'url("/capilla.jpg")'
      }
      
    },
  },
  plugins: [],
};

