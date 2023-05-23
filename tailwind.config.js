/** @type {import('tailwindcss').Config} */
module.exports = {
  blocklist: ['container'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      screens: {
        custom: { raw: '(min-width: 1024px) and (max-width: 1083px)' },
        'post-custom': { raw: '(min-width: 1084px)' },
        cal: { raw: '(min-width: 640px) and (max-width: 728px)' },
        'p-cal': { raw: '(min-width: 729px)' },
      },
      colors: {
        primary: {
          100: 'hsl(45, 34%, 86%)',
          200: 'hsl(45, 34%, 76%)',
          300: 'hsl(45, 34%, 66%)',
          400: 'hsl(45, 34%, 56%)',
          500: 'hsl(45, 34%, 46%)',
        },
        secondary: {
          100: 'hsl(20, 10%, 85%)',
          200: 'hsl(20, 10%, 75%)',
          300: 'hsl(20, 10%, 65%)',
          400: 'hsl(20, 10%, 55%)',
          500: 'hsl(20, 10%, 45%)',
        },
        neutral: {
          100: 'hsl(0, 0%, 95%)',
          200: 'hsl(0, 0%, 85%)',
          300: 'hsl(0, 0%, 75%)',
          400: 'hsl(0, 0%, 65%)',
          500: 'hsl(0, 0%, 55%)',
          600: 'hsl(0, 0%, 45%)',
          700: 'hsl(0, 0%, 35%)',
          800: 'hsl(0, 0%, 25%)',
          900: 'hsl(0, 0%, 5%)',
        },
        dark: {
          100: 'hsl(223, 58%, 27%)',
        },
        'custom-red': 'hsl(352, 100%, 39%)',
        'custom-gold': 'hsl(45, 34%, 50%)',
        'custom-gray': 'hsl(21, 10%, 42%)',
        'custom-teal': 'hsl(188, 100%, 27%)',
        'custom-navy': 'hsl(233, 100%, 20%)',
        'custom-white': 'hsl(0, 0%, 100%)',
        'custom-dark-blue': 'hsl(220, 60%, 5%)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
  darkMode: ['class', '.darkmode'],
}
