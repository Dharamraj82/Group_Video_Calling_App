import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // Ensures proper asset loading
  server: {
    historyApiFallback: true, // Fixes route handling on Vercel
  },
});
