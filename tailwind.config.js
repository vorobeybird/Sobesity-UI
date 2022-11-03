/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      primary: {
        dark: '#641E1F',
        darkest: '#461A1B',
        DEFAULT: '#7B2224',
        light: '#AF4141',
      },
      secondary: {
        dark: '#424143',
        DEFAULT: '#505154',
        light: '#858890',
      },
      tertiary: {
        dark: '#666060',
        DEFAULT: '#757171',
        light: '#747374',
      },
      black: {
        dark: '#16171B',
        DEFAULT: '#1F1F21',
        light: '#212226',
      },
      white: '#FFFFFF',
    },
    fontFamily: {
      oswald: 'Oswald, sans-serif',
      firaSans: 'Fira Sans, sans-serif',
      firaCode: 'Fira Code, monospace',
    },
    screens: {
      sm: '414px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      const typography = {
        '.h1': {
          fontSize: '1.5rem',
          lineHeight: '120.9%',
          letterSpacing: '0.05em',
          fontWeight: theme('fontWeight.medium'),
          fontFamily: theme('fontFamily.oswald'),
          color: theme('colors.white'),
          '@screen xl': {
            fontSize: '4rem',
          },
        },
        '.h2': {
          fontSize: '1.25rem',
          lineHeight: '120.9%',
          fontWeight: theme('fontWeight.medium'),
          fontFamily: theme('fontFamily.oswald'),
          color: theme('colors.white'),
          '@screen xl': {
            fontSize: '2rem',
          },
        },
        '.h3': {
          fontSize: '0.875rem',
          lineHeight: '120.9%',
          letterSpacing: '0.05em',
          fontWeight: theme('fontWeight.medium'),
          fontFamily: theme('fontFamily.oswald'),
          color: theme('colors.white'),
          textTransform: 'uppercase',
          '@screen xl': {
            fontSize: '1.25rem',
            letterSpacing: 'normal',
          },
        },
        '.body-1': {
          fontSize: '1rem',
          lineHeight: '142.9%',
          fontWeight: theme('fontWeight.light'),
          fontFamily: theme('fontFamily.firaSans'),
          color: theme('colors.white'),
          '@screen xl': {
            fontSize: '1.25rem',
          },
        },
        '.body-2': {
          fontSize: '0.75rem',
          lineHeight: '120.9%',
          fontWeight: theme('fontWeight.light'),
          fontFamily: theme('fontFamily.firaSans'),
          color: '#575252',
          '@screen xl': {
            fontSize: '1.25rem',
            color: theme('colors.white'),
            lineHeight: '325.9%',
            textTransform: 'uppercase',
            fontWeight: theme('fontWeight.normal'),
          },
        },
        '.body-3': {
          fontSize: '0.75rem',
          lineHeight: '120.9%',
          fontWeight: theme('fontWeight.normal'),
          fontFamily: theme('fontFamily.firaSans'),
          color: 'rgba(255, 255, 255, 0.48)',
          '@screen xl': {
            fontSize: '1.5rem',
            fontWeight: theme('fontWeight.light'),
          },
        },
        '.body-4': {
          fontSize: '0.875rem',
          lineHeight: '120.9%',
          fontWeight: theme('fontWeight.light'),
          fontFamily: theme('fontFamily.firaSans'),
          color: theme('colors.tertiary.dark'),
          '@screen xl': {
            fontSize: '1rem',
            fontWeight: theme('fontWeight.light'),
          },
        },
        '.body-5': {
          fontSize: '0.875rem',
          lineHeight: '120.9%',
          fontWeight: theme('fontWeight.light'),
          fontFamily: theme('fontFamily.firaCode'),
          color: '#C0ACAC',
        },
        '.navbar': {
          fontSize: '1.25rem',
          lineHeight: '120.9%',
          fontWeight: theme('fontWeight.light'),
          fontFamily: theme('fontFamily.firaSans'),
          textTransform: 'uppercase',
          color: theme('colors.white'),
        },
        '.footnote': {
          fontSize: '1.25rem',
          lineHeight: '120.9%',
          fontWeight: theme('fontWeight.normal'),
          fontFamily: theme('fontFamily.firaSans'),
          color: 'rgba(255, 255, 255, 0.48)',
        },
        '.button-1': {
          fontSize: '0.875rem',
          lineHeight: '120.9%',
          letterSpacing: '0.05em',
          fontWeight: theme('fontWeight.normal'),
          fontFamily: theme('fontFamily.oswald'),
          textTransform: 'uppercase',
          color: theme('colors.white'),
          '@screen xl': {
            fontSize: '1rem',
          },
        },
        '.button-2': {
          fontSize: '0.875rem',
          lineHeight: '120.9%',
          fontWeight: theme('fontWeight.light'),
          fontFamily: theme('fontFamily.firaSans'),
          color: theme('colors.white'),
          '@screen xl': {
            fontSize: '1.25rem',
          },
        },
        '.button-3': {
          fontSize: '1.125rem',
          lineHeight: '120.9%',
          fontWeight: theme('fontWeight.light'),
          fontFamily: theme('fontFamily.firaSans'),
          color: theme('colors.white'),
          '@screen xl': {
            fontSize: '1.25rem',
          },
        },
      };
      addComponents(typography);
    }),
  ],
};
