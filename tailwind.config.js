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
      }
    },
  },
  plugins: [],
}