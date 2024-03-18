/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ea2088',
        secundary: '#21212b',
        hover: '#3d3c4f',
        back: '#181820'
      },
      screens: {
        wide: '850px'
      }
    }
  },
  plugins: []
}
