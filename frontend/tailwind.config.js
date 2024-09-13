/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#11071F",
        secondary: "#1A0B2E",
        text: "#7127ba",
      },
      fontFamily: {
        preahvihear: ["Preahvihear", "sans"],
      },
      maxWidth: {
        primary: "1000px",
      },
    },
  },
  plugins: [],
};
