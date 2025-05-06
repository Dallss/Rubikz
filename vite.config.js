import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        threeD: resolve(__dirname, 'three-d-play.html'),
        twoD: resolve(__dirname, 'two-d.html'),
      }
    }
  }
})
