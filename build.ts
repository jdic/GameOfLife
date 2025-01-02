import type { BuildConfig } from 'bun'
import dts from 'bun-plugin-dts'

const config: BuildConfig =
{
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  target: 'node',
  sourcemap: 'inline',
  plugins: [dts()],
}

console.log('Building...')
await Bun.build(config)
console.log('Build complete!')
