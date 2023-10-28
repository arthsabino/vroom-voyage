/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        "primary-touch": "var(--primary-touch)",
        secondary: "var(--secondary)",
        grey: "var(--grey)",
        "overlay-surface": "var(--overlay-surface)",
      },
      height: {
        navh: "var(--nav-height)",
      },
      minHeight: {
        navh: "var(--nav-height)",
      },
      margin: {
        navh: "var(--nav-height)",
      },
    },
  },
  plugins: [],
};
