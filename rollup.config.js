import { resolve } from 'path'

export default {
    input: resolve(__dirname, 'src/index.js'),
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
        },
        {
            file: 'dist/es-module.js',
            format: 'esm',
        },
    ],
}
