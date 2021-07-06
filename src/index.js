import { getOptions } from 'loader-utils'
import validateOptions from 'schema-utils'

const schema = {
  type: 'object',
  properties: {
    isOpen: {
      type: 'boolean',
    },
  },
}

export default function svgPx2rem(source) {
  const options = getOptions(this)

  validateOptions(schema, options, 'svg-px2rem loader')

  const reg = /(?<=width[\s=]*['"]+|height[\s=]*['"]+)(?:(\d+)px)?/gi
  source = source.replace(reg, (_, g1) => {
    if (_) {
      return (g1 / 32).toFixed(4) + 'rem'
    }
    return _
  })
  return source
}
