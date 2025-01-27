import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: 'dist',
    assetsDir: '',  // Ensure assets are placed at root of /dist
    rollupOptions: {
      output: {
        format: 'iife',
        entryFileNames: 'watch-configurator.js',
        assetFileNames: '[name].[ext]'
      }
    }
  }
});