import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

import * as path from 'path'

module.exports = defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.ts'),
      name: 'VueDrx',
      fileName: format => `drx-corporate-components.${format}.js`
    }
  }
})
