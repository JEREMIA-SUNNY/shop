/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightgray: "#e9e9e9",

        orange: "#ffb511",
        coustom1: "#f7f5f0",
        subtext: "#647887",
        title: "#23313B",
      },
      fontFamily: {
        notosans: "Noto Sans",
        notosansmediu: "Noto Sans",
      },
      screens: {
        "3xl": "104 0px",
      },
      screens: {
        tablet: "1300px",
        // => @media (min-width: 640px) { ... }
      },
    },
  },
  plugins: [],
};
