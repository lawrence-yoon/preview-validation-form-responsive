/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        errorRed: "#FF5252",
        lightGrayViolet: "#DEDDDF",
        darkGrayViolet: "#8E8593",
        veryDarkGrayViolet: "#21092F",
      },
    },
    screens: {
      sm: "375px",
      "2xl": "1440px",
    },
  },
  plugins: [],
};
