/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        gravity: "#001B31", 
        star: "#FFC700",    
        deep: "#022B42",    
        nebula: "#F8FAFC",  
      },
      // AQUÍ DEFINES TU FUENTE
      fontFamily: {
        space: ['"Space Grotesk"', 'sans-serif'], 
      }
    },
  },
  plugins: [],
}