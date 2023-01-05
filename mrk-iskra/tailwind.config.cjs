/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'white': '#ffffff',
        'plava': '#000f2c',
        'footer': '#d2d6d3',
        
        },
      backgroundImage: {
        'hero': "url('../Images/bg_counter.jpg')",
        'proud': "url('../Images/Moonnew.jpg')",
        'match': "url('../Images/bluebg.jpg')",
      },

    },
    fontFamily:{
      'Kanit':"sans-serif"
    },
  },
  plugins: [],
}
