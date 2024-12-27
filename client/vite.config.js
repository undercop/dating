import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills'; // Correct way to import

export default defineConfig({
  plugins: [
    react(),
    nodePolyfills(), // Use the named export here
  ],
  optimizeDeps: {
    exclude: ['express'], // Exclude server-side dependencies
  },
});
