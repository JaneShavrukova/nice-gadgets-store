import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@styles': path.resolve(__dirname, './src/styles'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@assets': path.resolve(__dirname, './src/assets'),
      '@app': path.resolve(__dirname, './src/app'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
      '@modules': path.resolve(__dirname, './src/modules'),
      '@features': path.resolve(__dirname, './src/features'),
      '@types': path.resolve(__dirname, './src/types'),
    },
  },
});
