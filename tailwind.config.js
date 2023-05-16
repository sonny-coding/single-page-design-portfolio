/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlack: "#030303",
        mediumBrown: "#73746E",
        lightCream: "#FFF7F0",
        galacticBlue: "#755CDE",
        summerYellow: "#F6A560",
        pink: "#F39E9E",
        lightRed: "#EB7565",
        cyan: "#61C4B7",
        darkPurple: "#552049",
      },
    },
  },
  plugins: [],
};
