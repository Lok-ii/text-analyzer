/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryText: "#344054",
        secondaryText: "#475467",
        lightBg: "#F9FAFB",
        primaryBg: "#EFF6FF",
        borderColor: "#EAECF0",
        tabText: "#667085",
        buttonColor: "#731EE2",
      },
    },
  },
  plugins: [],
};
