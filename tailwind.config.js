/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        skyBlue: '#A3BFFA',      // Soft sky blue for horizon
        oceanDeep: '#1B263B',     // Deep ocean blue
        oceanMid: '#4A6D8A',      // Mid-tone ocean blue
        sandyBeige: '#F4E1C1',    // Sandy beige for accents
        coral: '#FF6F61',         // Coral for highlights
        seafoam: '#2EC4B6',       // Seafoam green for subtle accents
      },
    },
  },
  plugins: [],
}