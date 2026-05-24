import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Set base to './' so the built site works when hosted from any path
  // (GitHub Pages project sites, Netlify subfolders, etc).
  base: './',
});
