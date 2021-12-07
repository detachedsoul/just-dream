//const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: {
    enabled: true,
    content: [
      './*.html'
    ],
    safelist: [
      'hidden',
      'right-2'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'nunito': "Nunito, sans-serif",
        'rubik': "Rubik, sans-serif",
      },
      backgroundImage: {
        'hero-1': "linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(../img/slide-1.jpg)",
        'hero-2': "linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(../img/slide-2.jpg)",
        'hero-3': "linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(../img/slide-3.jpeg)",
        'hero-4': "linear-gradient(rgba(0, 0, 0, .8), rgba(0, 0, 0, .8)), url(../img/slide-4.jpeg)",
      },
      transitionProperty: {
        'padding': "padding",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};