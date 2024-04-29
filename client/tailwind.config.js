/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      sm: "12px",
      base: "14px",
      xl: "16px",
      "2xl": "20px",
      "3xl": "28px",
      "4xl": "38px",
      "5xl": "50px",
    },
    extend: {},
    colors: {
      primary: "#1DA1F2",
      white: "#fff",
      black: "#000",
      grey: "#A1AAaD",
      lightgrey: "#A2AAAD",
    },
  },
  plugins: [],
};
