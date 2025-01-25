/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000", // Jet Black
        accent: "#F7E7CE", // Champagne
        background: "#EAEAEA", // Light Gray
        neutral: "#483C32", // Dark Taupe
      },
    },
  },
  plugins: [],
};
