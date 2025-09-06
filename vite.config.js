import { defineConfig } from 'vite';

export default defineConfig({
  // Development server configuration
  server: {
    port: 3000,
    open: true,
  },
  
  // Build configuration
  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsDir: 'assets',
  },
  
  // Base path for GitHub Pages
  base: './',
  
  // CSS/Sass configuration
  css: {
    preprocessorOptions: {
      scss: {
        // Leave empty to use default configuration
      }
    }
  },
  
  // Files to copy to build
  publicDir: 'public'
});
