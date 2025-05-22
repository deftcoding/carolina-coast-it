/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#1B263B',
        secondary: '#00ADB5',
        darkSecondary: '#007A82',
        accent: '#E0E1DD',
        gradientEnd: '#415A77',
        warmAccent: '#F4A261',
        darkWarmAccent: '#D97706', 
      },
    },
  },
  plugins: [],
};