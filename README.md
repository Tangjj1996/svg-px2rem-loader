# SEMI SVG FILE TOOL

[![github-build][github-build]][github-build-url]
![npm-download][npm-download]
![npm-licence][npm-licence]
![github-commit][github-commit]

## This is a development environment which convert svg file px to rem tool

> By the way, you probably use `svg-inline-loader` of matching `.svg` extension files, So you can get a prop first.

## Options

| name         | type    | default | description                                                        |
| ------------ | ------- | ------- | ------------------------------------------------------------------ |
| rootValue    | number  | 32      | a root value for convert px to rem, it likes root(html) font-size  |
| isLastLoader | boolean | false   | if set `true` means this loader is the lastest loader for svg file |

## Example

```js
// webpack.config.js
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
```

You can also use it without other svg-laoder like `svg-inline-loader`

```js
module: {
    rules: [
        {
            test: /\.svg$/,
            use: [
                {
                    loader: path.resolve(__dirname, '../dist/index.js'),
                    options: {
                        rootValue: 32,
                        isLastLoader: true,
                    },
                },
            ],
        },
    ],
},
```

[LICENSE](./LICENSE)

[github-build]: https://img.shields.io/github/workflow/status/Tangjj1996/svg-px2rem-loader/Test
[github-build-url]: https://github.com/Tangjj1996/svg-px2rem-loader/actions/workflows/main.yml
[npm-download]: https://img.shields.io/npm/dw/svg-px2rem-loader
[npm-licence]: https://img.shields.io/npm/l/svg-px2rem-loader
[github-commit]: https://img.shields.io/github/commit-activity/m/Tangjj1996/svg-px2rem-loader
