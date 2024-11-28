import { defineConfig } from 'vite';
import path from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'components',
      fileName: (format) => `components.${format}.js`,
    },
    rollupOptions: {
      external: [], // Specify external dependencies
      output: {
        globals: {}, // Specify global variables for external dependencies
      },
    },
  },
});