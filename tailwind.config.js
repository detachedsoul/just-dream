//const defaultTheme = require('tailwindcss/defaultTheme');

const plugin = require('tailwindcss/plugin');

// Rotate X utilities
const rotateX = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-x-90': {
      transform: 'rotateX(90deg)',
    },
    '.rotate-x-0': {
      transform: 'rotateX(0)',
    },
  });
});

module.exports = {
  content: [
    './*.html'
  ],
  safelist: [
    'hidden',
    'right-2'
  ],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'nunito': "Nunito, sans-serif",
        'rubik': "Rubik, sans-serif",
      },
      colors: {
        'primary-purple': "#690dac",
        'dark-yellow': "#df9f20",
      },
      backgroundImage: {
        'hero-1': "linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(../img/slide-1.jpg)",
        'hero-2': "linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(../img/slide-2.jpg)",
        'hero-3': "linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(../img/slide-3.jpeg)",
        'hero-4': "linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(../img/slide-4.jpeg)",
         'about': "linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(../img/about.jpg)",
      },
      transitionProperty: {
        'padding': "padding",
        'bg-color': "background-color"
      },
    },
  },
  variants: {
    extend: {
      rotateX: ['group-hover'],
    },
  },
  plugins: [rotateX],
};