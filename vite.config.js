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
  },
  
  // Base path for GitHub Pages
  base: '/05.-Proyecto-HTML-con-estilos/',
  
  // CSS/Sass configuration (remove problematic settings)
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
