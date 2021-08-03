import { getOptions } from 'loader-utils'

export interface LoaderOptions {
  rootValue?: number
  isLastLoader?: boolean
}

export default function svtPx2Rem(source: string) {
  const options: LoaderOptions = getOptions(this)
  const reg = /(?<=width[\s=]*['"]+|height[\s=]*['"]+)(?:(\d+)px)?/gi

  let res = source.replace(reg, (_, g1) => {
    if (_) {
      if ('rootValue' in options) {
        return `${(g1 / options.rootValue).toFixed(4)}rem`
      }
      return `${(g1 / 32).toFixed(4)}rem`
    }
    return _
  })

  if ('isLastLoader' in options && options.isLastLoader) {
    return `export default ${JSON.stringify(res)}`
  }

  return res
}
