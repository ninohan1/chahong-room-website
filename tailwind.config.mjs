/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#C9A96E',
        'gold-light': '#E8D5B0',
        'dark-bg': '#080808',
        'dark-card': '#0F0F0F',
        'dark-border': '#1A1A1A',
        'text-muted': '#777777',
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['DM Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
