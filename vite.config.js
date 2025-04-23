import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          mui: ['@mui/material', '@mui/icons-material'],
          framer: ['framer-motion'],
        },
      },
    },
  },
  base: '/portfolio/',
  plugins: [react()],
})
