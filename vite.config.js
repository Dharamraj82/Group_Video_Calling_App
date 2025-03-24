import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/',  // Ensures correct path for static assets on Vercel
  build: {
    outDir: 'dist',
  },
  server: {
    host: true,
    port: 5173,
  }
});
