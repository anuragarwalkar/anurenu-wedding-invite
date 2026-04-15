/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FEFDFB',
          100: '#FAF8F5',
          200: '#F5F0EA',
          300: '#EDE5DA',
          400: '#E0D3C3',
          500: '#D4C4AE',
        },
        charcoal: {
          50: '#F5F5F5',
          100: '#E0E0E0',
          200: '#B0B0B0',
          300: '#808080',
          400: '#555555',
          500: '#3A3A3A',
          600: '#2C2C2C',
          700: '#1F1F1F',
          800: '#151515',
          900: '#0A0A0A',
        },
        gold: {
          50: '#FFF9EF',
          100: '#FEF0D5',
          200: '#FDDFA6',
          300: '#F5CC6A',
          400: '#D4A843',
          500: '#B8860B',
          600: '#9A7209',
          700: '#7A5B07',
          800: '#5C4405',
          900: '#3D2D03',
        },
        blush: {
          50: '#FDF8F5',
          100: '#F9EDE6',
          200: '#F0D8CA',
          300: '#E8D5C4',
          400: '#D4B8A5',
          500: '#C09B86',
        },
      },
      fontFamily: {
        heading: ['"Great Vibes"', 'cursive'],
        serif: ['"Cormorant Garamond"', 'serif'],
        body: ['"Poppins"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
