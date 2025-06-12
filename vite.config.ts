import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/events/2025/eduweb/',
  build: {
    outDir: 'dist/events/2025/eduweb',
    assetsDir: 'assets',
  },
  server: {
    port: 3000,
    open: '/events/2025/eduweb/'
  }
})