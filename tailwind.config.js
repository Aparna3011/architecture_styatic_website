/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        basalt: '#1A1916',
        ivory: '#F5F1EA',
        stone: '#9E9B94',
        ochre: '#C4894A',
        terra: '#8B4A2F',
        slate: '#3D4A52',
        parchment: '#EDE8DC',
        bronze: '#6B5740',
        ghost: '#F9F7F4',
        vault: '#0F0E0C',
        mist: '#C8C4BB',
        smoke: '#2E2D2A',
        gold: '#D4A853',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
