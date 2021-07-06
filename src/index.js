import { getOptions } from 'loader-utils'
import { validate } from 'schema-utils'

const schema = {
  type: 'object',
  properties: {
    rootValue: {
      type: 'number',
    },
  },
}

export default function svgPx2rem(source) {
  const options = getOptions(this)

  validate(schema, options, 'svg-px2rem loader')

  const reg = /(?<=width[\s=]*['"]+|height[\s=]*['"]+)(?:(\d+)px)?/gi
  source = source.replace(reg, (_, g1) => {
    if (_) {
      return (g1 / options.rootValue).toFixed(4) + 'rem'
    }
    return _
  })

  return source
}
