/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "a4-speed": ["A4 Speed", "system-ui", "sans-serif"],
        "robot-crush": ["Robot Crush", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
