/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#A88F7B',
        'primary-dark': '#8D8076',
        'primary-light': '#DCCDBD',
        bg: '#F7F4EF',
        'bg-card': '#FFFFFF',
        dark: '#3A3838',
        'text-main': '#3A3838',
        'text-muted': '#8D8076',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
