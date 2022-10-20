/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        dark: '#641E1F',
        darkest: '#461A1B',
        default: '#7B2224',
        light: '#AF4141',
      },
      secondary: {
        dark: '#666060',
        default: '#757171',
      },
      black: {
        dark: '#16171B',
        defalut: '#212226',
      },
      grey: '#505154',
      white: '#FFFFFF',
    },
    fontFamily: {
      oswald: ['Oswald', 'sans-serif'],
      firaSans: ['Fira Sans', 'sans-serif'],
      firaCode: ['Fira Code', 'monospace'],
    },
    screens: {
      sm: { min: '414px' },
      md: { min: '768px' },
      lg: { min: '1024px' },
      xl: { min: '1280px' },
    },
    extend: {},
  },
  plugins: [],
};
