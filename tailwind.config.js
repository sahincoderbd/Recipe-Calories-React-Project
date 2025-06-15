// tailwind.config.js
import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  theme: {
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
        para: 'var(--color-para)',
      },
    },
  },
  plugins: [tailwindcss(),]
});
