import { defineConfig } from 'vite';
import { resolve } from 'path';
import { glob } from 'glob';

// Get all HTML files dynamically
const htmlFiles = glob.sync('*.html').reduce((acc, file) => {
  const name = file.replace('.html', '');
  acc[name] = resolve(__dirname, file);
  return acc;
}, {});

export default defineConfig({
  // Development server configuration
  server: {
    port: 3000,
    open: true,
  },
  
  // Build configuration with multiple entry points
  build: {
    outDir: 'dist',
    sourcemap: true,
    assetsDir: 'assets',
    rollupOptions: {
      input: htmlFiles,
    },
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
