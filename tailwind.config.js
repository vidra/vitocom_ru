/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["/home/otter/vitocom_ru/src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateColumns: {
        '8': '10% 10% 15% 15% 15% 15%  10% 10%',
      },
    },
  },
  plugins: [],
}
