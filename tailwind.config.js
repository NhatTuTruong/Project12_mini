/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ff6700',
        'title' : '#303442',
        'gray-f3f3f3' : '#f3f3f3',
        'gray-303442' : '#303442',
        'red-d0021c' : '#d0021c',
        'footer' : '#222529',
        'gray-a8a8a8' : '#a8a8a8'
      },
    },
    container: {
      padding: '4rem',
    },
  },
  plugins: [],
}
