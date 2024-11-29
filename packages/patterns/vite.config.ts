import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()], 
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), 
      name: 'wai-react', 
      fileName: (format) => `wai-react.${format}.js`, 
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});