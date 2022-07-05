/** @type {import('tailwindcss').Config} */
const { join } = require('path');
module.exports = {
  content: [],
  purge: [join(__dirname, 'pages/**/*.{js,ts,jsx,tsx}')],
  theme: {
    extend: {},
  },
  plugins: [],
};
