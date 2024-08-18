import * as path from 'node:path'
import dts from 'vite-plugin-dts'
import { defineConfig, type Plugin } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'

const plugins: Plugin[] = []

if (process.env.VITE_STATS) {
  plugins.push(visualizer())
}

export default defineConfig({
  base: '',
  plugins: [dts(), ...plugins],
  build: {
    emptyOutDir: false,
    sourcemap: true,
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'Xpra',
      fileName: (format) => `xpra.${format}.js`,
    },
  },
})
