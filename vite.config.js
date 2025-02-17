import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html',
    }
  },
  server: {
    host: true,  // Allow access from external hosts (important)
    port: 10000, // Change to match Render's assigned port
    open: false, // Prevent auto-opening (not needed for Render)
  },
  preview: {
    port: 10000, // Ensure preview runs on the same port
    allowedHosts: ['hidebehider-frontend.onrender.com'], // Add Render domain
  }
});
