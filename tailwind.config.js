const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
       
        primary: ['Josefin', ...defaultTheme.fontFamily.sans],
        secondary: ['Cormorant Garamond', ...defaultTheme.fontFamily.serif],
        third: ['Lora', ...defaultTheme.fontFamily.serif],
        fourth: ['Varela Round', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': {
          DEFAULT: "#a35b6a",
          dark:  "#723f4a", 
          test: "DEFAULT.900", 
        },
        'secondary': '#5BA394',
        'third' : '#3f4347',
        'text': '#7A7A7A',
        'textPrimary': '#444444',

        
      },
      backgroundImage: {
        'login-BgImage': "url('/assets/images/ecological-hair-care-min.jpeg')",
        
      }
    },
  },
  plugins: [],
}
