/**
 * @jest-environment node
 */
import { test, expect } from '@jest/globals'
import compiler from './compiler'

test('Inserts name add outputs javascript', async () => {
  const stats = await compiler('example.svg')
  const output = stats.toJson({ source: true }).modules[0].source

  expect(output).toBe('export default 1')
})
