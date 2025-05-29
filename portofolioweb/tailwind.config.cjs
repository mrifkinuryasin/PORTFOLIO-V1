/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{tsx,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#1a202c', // Dark gray for main elements
        secondary: '#4a5568', // Lighter gray for text
        accent: '#68d391', // Green accent for buttons and highlights
        'accent-dark': '#4ade80', // Darker green for hover
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};