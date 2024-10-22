import typography from '@tailwindcss/typography'
import forms from '@tailwindcss/forms'
import daisyui from 'daisyui'

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      keyframes: {
        'bounce-left': {
          '0%, 100%': {transform: 'translateX(0)'},
          '50%': {transform: 'translateX(-25%)'},
        },
      },
      animation: {
        'bounce-left': 'bounce-left 0.8s ease-in-out infinite',
      },
    },
  },
  plugins: [typography, forms, daisyui],
}
