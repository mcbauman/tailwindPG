/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    container:{
      center:true
    },
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif']
    // ,colors: {
    //   transparent: 'transparent',
    //   black: '#000',
    //   white: '#fff'
    // }
  },
  plugins: [],
}

