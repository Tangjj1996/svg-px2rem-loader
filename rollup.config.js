import { resolve } from 'path'
import rollupResolve from '@rollup/plugin-node-resolve'
import rollupCommonjs from '@rollup/plugin-commonjs'
import rollupJson from '@rollup/plugin-json'
import typescript from 'rollup-plugin-typescript2'

export default {
  input: resolve(__dirname, 'src/index.ts'),
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'default', // you should set out.export to 'auto' or 'default' while you are using es-module export default syntax
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
    },
  ],
  plugins: [
    typescript({
      tsconfig: './tsconfig.json',
    }),
    rollupResolve(),
    rollupCommonjs(),
    rollupJson(),
  ],
}
