/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".src/app/**/*.{js,ts,jsx,tsx}", // new App-router folder
    // "./pages/**/*.{js,ts,jsx,tsx}",     // legacy pages folder (if you have one)
    ".src/components/**/*.{js,ts,jsx,tsx}", // your shared components
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-georama)', 'system-ui'],
      },
    },
  },
  plugins: [],
};
