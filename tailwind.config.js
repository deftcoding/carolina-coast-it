/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B263B',
        gradientEnd: '#415A77',
        secondary: '#2EC4B6',
        accent: '#F4A261',
        warmAccent: '#E76F51',
        darkSecondary: '#1D3557',
        darkWarmAccent: '#D98A3F',
      },
    },
  },
  plugins: [],
}