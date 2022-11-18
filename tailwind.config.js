/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryColor: "#00FFA3",
        lightGrey: "#F3F5F6",
        darkBackground: "#171A1C",
        darkCardColor: "#1E2224",
        darkFieldBgColor: "#2A2F32",
      },
    },
  },
  plugins: [],
};
