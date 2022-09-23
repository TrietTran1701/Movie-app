/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "dark-theme": "#1C1C1E",
        "light-theme": "#FFFFFF",
        "red-light": "#E40405",
        "red-bold": "#370102",
        "dark-lighten": "#333335",
        "gray-darken": "#3a3939",
      },
    },
  },
  plugins: [],
};
