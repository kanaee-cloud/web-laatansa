/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#222831",
        secondary: "#447D9B",
        accent: "#FE7743",
        light: "#F3F4F6",
        dark: "#121212",
        gray: "#212A3E"
      },
      backgroundImage: {
        landing: "url('/images/bg-landing.png')",
      }
    },
  },
  plugins: [],
}

