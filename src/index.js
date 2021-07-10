import { getOptions } from 'loader-utils'
import { validate } from 'schema-utils'

const schema = {
  type: 'object',
  properties: {
    rootValue: {
      type: 'number',
    },
    isLastLoader: {
      type: 'boolean',
    },
  },
}

export default function svgPx2rem(source) {
  const options = getOptions(this)

  validate(schema, options, 'svg-px2rem loader')

  const reg = /(?<=width[\s=]*['"]+|height[\s=]*['"]+)(?:(\d+)px)?/gi
  source = source.replace(reg, (_, g1) => {
    if (_) {
      if (Reflect.has(options, 'rootValue')) {
        return (g1 / options.rootValue).toFixed(4) + 'rem'
      } else {
        return (g1 / 32).toFixed(4) + 'rem'
      }
    }
    return _
  })

  if (Reflect.has(options, 'isLastLoader') && options.isLastLoader) {
    return `export default ${JSON.stringify(source)}`
  }

  return source
}
