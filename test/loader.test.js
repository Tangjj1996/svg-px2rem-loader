/**
 * @jest-environment node
 */
import { test, expect } from '@jest/globals'
import compilerAsPreloader from './compiler_as_preloader'
import compilerAsLastloader from './compiler_as_lastloader'

test('Inserts name add outputs javascript', async () => {
  const stats = await compilerAsPreloader('example.svg')
  const output = stats.toJson({ source: true }).modules[0].source

  expect(output).toMatch('rem')
})

test('Inserts name add outputs javascript when is the lastest loader', async () => {
  const stats = await compilerAsLastloader('example.svg')
  const output = stats.toJson({ source: true }).modules[0].source

  expect(output).toMatch('svg')
})
