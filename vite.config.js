import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: '0.0.0.0', // listen on all network interfaces
    port: 5173       // optional if you want a specific port
  },
  base: '/EdgeExpert/'
})
