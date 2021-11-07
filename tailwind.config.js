module.exports = {
  // purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      backgroundColor: theme => ({
        'lightRick': '#B7E4F9FF;',
        'darkRick': '#69C8ECFF',
        'morty': '#FAFD7CFF',
        'raygun': '#97CE4C',
        'summerHair': '#E89242FF',
      }),
      textColor: theme => theme('colors'),
      textColor: {
       'morty': '#FAFD7CFF',
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }