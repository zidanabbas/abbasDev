/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "16px",
      },
      colors: {
        primary: "#f9bc60", // Orange
        secondary: "#fffffe", // Text White
        third: "#004643", //BackgroundHijau
        tertiary: "#397367", //HijauSmooth
        dark: "#0F0F0F", // Hitam
        smoothDark: "#151515",
        paragraph: "#2d334a",
      },
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
