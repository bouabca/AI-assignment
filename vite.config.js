import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    allowedHosts: [
      'all',
      // Vous pouvez ajouter d'autres hôtes autorisés si nécessaire
    ]
  },
  preview: { allowedHosts: [ 'all' ] }
})
