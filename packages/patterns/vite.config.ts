import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths() ], 
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), 
      name: 'wai-react', 
      fileName: (format, entryName) => `wai-react-${entryName}.${format}.js`,

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