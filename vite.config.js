import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    host: true,
    port: 4173,
    strictPort: true,
    allowedHosts: ['mouji-mouji-qjzges-64c235-165-232-73-157.traefik.me']
  },
  server: {
    host: true,
    port: 4173,
    strictPort: true,
    allowedHosts: ['mouji-mouji-qjzges-64c235-165-232-73-157.traefik.me']
  }
})
