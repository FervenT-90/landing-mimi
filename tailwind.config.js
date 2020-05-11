/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */

/*
 ** Downloaded fonts: Oxanium & Koho
 ** Oxanium available weight: 200,300,400,500,600,700,800
 ** KoHo available weight: 200,300,400,500,600,700 (Supports italics)

 **  TailwindCSS Font Weight's: 
 **
 ** .font-hairline      font-weight: 100;
 ** .font-thin	         font-weight: 200;
 ** .font-light	      font-weight: 300;
 ** .font-normal	      font-weight: 400;
 ** .font-medium	      font-weight: 500;
 ** .font-semibold	   font-weight: 600;
 ** .font-bold	         font-weight: 700;
 ** .font-extrabold	   font-weight: 800;
 ** .font-black	      font-weight: 900;
 */

module.exports = {
   theme: {
      fontFamily: {
         primary: ['Oxanium', 'sans-serif'],
         secondary: ['KoHo', 'sans-serif']
      },
      extend: {
         colors: {
            'black-mimi': '#333333',
            'orange-mimi': '#FE9C42',
            'violet-mimi': '#7E21F5'
         }
      }
   },
   variants: {
      backgroundColor: ['responsive', 'hover', 'focus', 'active']
   },
   plugins: []
};
