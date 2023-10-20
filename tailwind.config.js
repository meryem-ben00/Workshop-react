/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1e2e5c", //background color
        colorWhite: "#fafafa", //text color white
        greenNav: "#2E8544", // navbare color
      },
    },
  },
  plugins: [],
};
