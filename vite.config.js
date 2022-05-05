import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 7007,
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
      {
        find: /@c3\/css/,
        replacement: '/packages/css/src',
      },
      {
        find: /@c3\/uikits/,
        replacement: '/packages/uikits/src',
      },
      {
        find: /@c3\/utils/,
        replacement: '/packages/utils/src',
      },
      {
        find: /@c3\/dom/,
        replacement: '/packages/dom/src',
      },
      {
        find: /@c3\/algo/,
        replacement: '/packages/algo/src',
      },
      {
        find: /@c3\/hooks/,
        replacement: '/packages/hooks/src',
      },
    ],
  },
});
