/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
require('tailwind-typewriter')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      primary: '#2fcc4e',
      secondary: '#cb2727',
      black: colors.black,
      'white': '#ffffff',
    },
    extend: {
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
