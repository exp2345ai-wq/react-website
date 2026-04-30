import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

// Vite serves assets from `public/` at the site root.
// We point publicDir to legacy-source/assets so the original images,
// lottie JSON files, and fonts continue to be reachable at the same
// paths the original HTML used (e.g. `/circlelogotaru.png`).
export default defineConfig({
  plugins: [react()],
  publicDir: path.resolve(__dirname, 'legacy-source/assets'),
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  preview: {
    host: '0.0.0.0',
    port: 4173,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    chunkSizeWarningLimit: 4096,
  },
  // Allow Vite to import the original HTML files as raw strings.
  // This is the foundation of our 1:1 design preservation: each React
  // page component loads its corresponding HTML body verbatim.
  assetsInclude: ['**/*.html'],
});
