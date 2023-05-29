/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors:{
        "bookmark-purple": "#5267df",
        "bookmark-red": "#fa5959",
        "bookmark-blue": "#242a45",
        "bookmark-grey": "#9194a2",
        "bookmark-white": "#f7f7f7",
      }
    },
    fontFamily:{
      poppins:["Poppins, san-serif"]
    },
    container:{
      center: true,
      padding: '2rem',
      screens:{
        lg:"1124px",
        xl:"1124px",
        '2xl':"1124px"
      }
    }
  },
  plugins: [],
}

