import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './', // <-- This line is critical for Netlify to render your React app properly
  plugins: [react()],
})
