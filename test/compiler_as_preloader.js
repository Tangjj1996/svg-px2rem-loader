import path from 'path'
import webpack from 'webpack'
import { createFsFromVolume, Volume } from 'memfs'

export default (fixture) => {
    const compiler = webpack({
        context: __dirname,
        entry: `./${fixture}`,
        output: {
            path: path.resolve(__dirname),
            filename: 'bundle.js',
        },
        module: {
            rules: [
                {
                    test: /\.svg$/,
                    use: [
                        {
                            loader: 'svg-inline-loader',
                            options: {
                                removeSVGTagAttrs: false,
                            },
                        },
                        {
                            loader: path.resolve(__dirname, '../dist/index.js'),
                            options: {
                                rootValue: 32,
                            },
                        },
                    ],
                },
            ],
        },
    })

    compiler.outputFileSystem = createFsFromVolume(new Volume())
    compiler.outputFileSystem.join = path.join.bind(path)

    return new Promise((resolve, reject) => {
        compiler.run((err, stats) => {
            if (err) reject(err)
            if (stats.hasErrors()) {
                reject(stats.toJson().errors)
            }

            resolve(stats)
        })
    })
}
