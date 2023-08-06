/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '10/20/60/10': '10% 20% 60% 10%',
      },
    },
  },
  plugins: [],
}
