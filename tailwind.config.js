/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': "#82B540",
        "black": "#3a3a3a",
        "heart": "#F44336",
        "app-white": "#f6f8fa",
      },

      textColor: {
        "black": "#373737",
        "heart": "#F44336",
        "green": "#82B540",
      }
    },
    fontFamily: {
      Nunito: ['Nunito', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],
      Mukta: ['Mukta', 'sans-serif']
    },
    container: {
      center: true,
      padding: "1rem"
    },
    screens: {
      "sm": "768px",
      "md": "992px",
      "lg": "1124px",
      "xl": "1124px",
      "2xl": "1124px",
    },
  },
  plugins: [],
}
