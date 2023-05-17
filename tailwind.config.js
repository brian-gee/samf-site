/** @type {import('tailwindcss').Config} */
module.exports = {
  blocklist: ['container'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: 'hsl(45.6, 33.63%, 76.27%)',
          200: 'hsl(45.6, 33.63%, 66.27%)',
          300: 'hsl(45.6, 33.63%, 56.27%)',
          400: 'hsl(45.6, 33.63%, 46.27%)',
          500: 'hsl(45.6, 33.63%, 36.27%)',
        },
        secondary: {
          100: 'hsl(45.6, 33.63%, 76.27%)',
          200: 'hsl(45.6, 33.63%, 66.27%)',
          300: 'hsl(45.6, 33.63%, 56.27%)',
          400: 'hsl(45.6, 33.63%, 46.27%)',
          500: 'hsl(45.6, 33.63%, 36.27%)',
        },
        neutral: {
          100: 'hsl(45.6, 33.63%, 90.27%)',
          200: 'hsl(46.6, 35%, 80.27%)',
          300: 'hsl(47.6, 36%, 70.27%)',
          400: 'hsl(48.6, 37%, 60.27%)',
          500: 'hsl(49.6, 38%, 50.27%)',
          600: 'hsl(50.6, 39%, 40.27%)',
          700: 'hsl(20, 60%, 30%)',
          800: 'hsl(20, 65%, 20%)',
          900: 'hsl(20, 70%, 10%)',
        },
        dark: {
          100: 'hsl(20, 70%, 10%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  darkMode: ['class', '.darkmode'],
}
