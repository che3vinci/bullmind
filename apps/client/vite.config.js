import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 7010,
  },

  resolve: {
    alias: [
      {
        find: /@src/,
        replacement: '/src',
      },
      {
        find: /@shapes/,
        replacement: '/src/views/components/shapes',
      },
    ],
  },
});
