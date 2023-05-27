/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        titleColor: '#071C4D',
        green: '#DEF4ED',
        greenShadow: '#22C55E',
        red: '#FCDDE1',
        redShadow: '#FE6B7E',
        blue: '#CEDDFF',
        blueShadow: '#175CFF',
      },
      boxShadow: {
        gs: '8px 8px 0 0 #22C55E',
        rs: '8px 8px 0 0 #FE6B7E',
        bs: '8px 8px 0 0 #175CFF',
      },
    },
  },
  plugins: [],
};
