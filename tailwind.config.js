/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add or extend colors as needed
        white: '#ffffff', // Set black as the default font color
      },
    },
  },
  plugins: [require('daisyui')],
}

