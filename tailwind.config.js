/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        souk: {
          50: '#fdf4ff',
          500: '#d946ef',
          600: '#c026d3',
          900: '#701a75',
        }
      }
    },
  },
  plugins: [],
}
