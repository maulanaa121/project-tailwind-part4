/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      padding:{
        DEAFULT:'15px',
      },
    },
    screens:{
      sm: '640px',      
      md: '768px',      
      lg: '960px',      
      xl: '1200px',      
    },
    fontFamily:{
      primary : 'DM serif Display',
      secondary : 'Jost',
    },
    backgroundImage:{
      hero: 'url(/assets/hero/bg.jpg)',
      grid: 'url(/assets/grid.png)',
    },
    extend: {
      colors:{
        primary:{
          DEFAULT:'#292f36',
          hover:'#343e4a'
        },
        secondary:'#4d5053',
        accent:{
          DEAFULT:'#cda274',
          secondary:'#f4f0ec',
          hover:'#b88c5d',
        },
      }
    },
  },
  plugins: [],
}

