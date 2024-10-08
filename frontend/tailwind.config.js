/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#11071F",
        secondary: "#1A0B2E",
        third: "#130428",
        button: "#2c1250",
        text: "#7127ba",
      },
      fontFamily: {
        preahvihear: ["Preahvihear", "sans"],
      },
      maxWidth: {
        primary: "1350px",
      },
    },
  },
  plugins: [],
};
