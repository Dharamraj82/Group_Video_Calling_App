import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets load properly
  server: {
    host: true, 
    port: parseInt(process.env.VITE_PORT) || 5173, // Allows other devices to connect
  },
  build: {
    outDir: 'dist',
  }
});
