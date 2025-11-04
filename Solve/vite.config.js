import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss({
      theme: {
        fontFamily: {
          inter: ["Inter", "sans-serif"],
          paytone: ['"Paytone One"', 'sans-serif'],
        },
      }
    }),
  ],
  
})