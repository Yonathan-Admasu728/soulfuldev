/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#030B0D",
        secondary: "#8BA8A0",
        tertiary: "#0A1F1A",
        "black-100": "#061412",
        "black-200": "#040E0C",
        "white-100": "#E8F0ED",
        accent: "#C9A84C",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #0A2E28",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
