/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-clmd' : {max : '933px'},
        'max-cmd': { max: '1038px' },
        'min-cmd': { min: '1038px' }, 
        'max-clumd': { max: '948px' }, 
        'max-cllmd': { max: '764px' }, 
        'min-cllmd': {min : '764px'},
        'max-cumd': { max : '1410px'},
        'max-csm' : {max : '448px'}
      },
    },
  },
  plugins: [],
}