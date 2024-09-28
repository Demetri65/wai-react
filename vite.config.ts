import { defineConfig } from 'vite'
import { resolve } from "path"
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/main.js'),
      name: 'WAI-ARIA',
      fileName: 'wai-aria',
    },
    rollupOptions: {
      external: ['react'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: 'React',
        },
      },
    },
  },
})
