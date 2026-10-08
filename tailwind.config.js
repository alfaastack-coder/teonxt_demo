/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#0B1F3A',
          secondary: '#0F766E',
          accent: '#16A34A',
          dark: '#07111F',
          light: '#F7F9FC',
          text: '#111827',
          muted: '#64748B',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1280px',
        },
      },
    },
  },
  plugins: [],
}
