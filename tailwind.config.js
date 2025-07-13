/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}", // Add your component folders if needed
  ],
  theme: {
    extend: {
      colors: {
        dark: "hsl(230, 35%, 7%)",
        accent: "hsl(231, 77%, 90%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        'bellefair': ["Bellefair", "serif"],
        'barlow': ["Barlow", "sans-serif"],
        'barlow-cond': ["Barlow Condensed", "sans-serif"],
      },
      fontSize: {
        "fs-900": "clamp(5rem, 8vw + 1rem, 9.375rem)",
        "fs-800": "6.25rem",
        "fs-700": "3.5rem",
        "fs-600": "2rem",
        "fs-500": "1.75rem",
        "fs-400": "1.125rem",
        "fs-300": "1rem",
        "fs-200": "0.875rem",
      },
      letterSpacing: {
        "spacing-1": "4.75px",
        "spacing-2": "2.7px",
        "spacing-3": "2.35px",
      },
    },
  },
  plugins: [],
};
