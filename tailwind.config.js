/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#101010",
        primary: "#FF469F",
        grey: "#FDFDFD8C",
        greyDark: "rgba(255, 255, 255, 0.15)",
        transp: "#0C0C0C95",
      },
      fontFamily: {
        sans: ["Work Sans", "sans-serif"],
      },
      fontSize: {
        "5xl": ["50px", "150%"],
        base: ["16px", "150%"],
      },
    },
  },
  plugins: [],
};
