/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
require('tailwind-typewriter')
  const defaultTheme = require('tailwindcss/defaultTheme');


module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xsm: '0.58rem',
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    screens: {
      'sm': '350px', //Mobile
      'md': '650px', //Tablet
      'lg': '1030px', //Laptop
      'xlg': '1310px', //Desktop
    },
    colors: {
      primary: '#2fcc4e',
      secondary: '#cb2727',
      black: colors.black,
      'white': '#ffffff',
    },
    extend: {
      animation: {
        marquee: 'marquee 5s linear infinite',
        marquee2: 'marquee2 5s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      fontFamily: {
        pressStart: ['"Press Start 2P"', 'cursive'],
      }
    },
  plugins: [
      require('tailwind-typewriter') ({
        wordsets: {
            fruit: {
                words: ['apple', 'banana', 'orange', 'pear', 'strawberry'],
                delay: 3
            }
        }
    })
  ],
}
}
