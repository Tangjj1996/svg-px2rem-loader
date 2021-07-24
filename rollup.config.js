import { resolve } from 'path'
import rollupResolve from '@rollup/plugin-node-resolve'
import rollupCommonjs from '@rollup/plugin-commonjs'
import rollupJson from '@rollup/plugin-json'

export default {
  input: resolve(__dirname, 'src/index.js'),
  output: [
    {
      file: 'dist/cjs.js',
      format: 'cjs',
      exports: 'default', // you should set out.export to 'auto' or 'default' while you are using es-module export default syntax
    },
    {
      file: 'dist/index.js',
      format: 'esm',
    },
  ],
  plugins: [rollupResolve(), rollupCommonjs(), rollupJson()],
}
