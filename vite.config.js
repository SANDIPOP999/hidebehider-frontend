import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: 'index.html', // Not usually necessary unless you're dealing with multiple entry points
    }
  },
  server: {
    port: 3000,  // Customize the port if needed
    open: true   // Optionally open the app automatically in your browser
  }, 
  preview: {
    port: 10000,
    allowedHosts: ['hidebehider-frontend.onrender.com'}
});
