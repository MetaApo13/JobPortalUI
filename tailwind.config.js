
  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // This is to ensure Tailwind purges unused CSS from these files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
