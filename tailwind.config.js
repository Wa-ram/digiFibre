/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./html/**/*.html",
    "./js/**/*.js",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1DAD16",
        lightGreen: "#8BCD2C",
        whiteGray: "#F8F7F7",
      },
    },
  },
  plugins: [],
};
