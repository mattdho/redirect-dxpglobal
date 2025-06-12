/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans-serif'],
        'merriweather': ['Merriweather', 'serif'],
      },
      colors: {
        'jblue': {
          'dark': '#040066',
          'primary': '#040AB2',
          'medium': '#1941FA',
          'light': '#3C82FF'
        },
        'jred': {
          'primary': '#F00A0A',
          'medium': '#FF3F3F',
          'light': '#F16A6A',
          'lighter': '#FF8982'
        },
        'jgrey': {
          'lightest': '#F5F5F5',
          'light': '#E8E8E8',
          'medium': '#CFCFCF',
          'dark': '#B5B5B5'
        }
      },
      animation: {
        'fade-in-down': 'fadeInDown 0.8s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'scale-in': 'scaleIn 0.5s ease-out',
      },
      keyframes: {
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.9)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        }
      }
    },
  },
  plugins: [],
}