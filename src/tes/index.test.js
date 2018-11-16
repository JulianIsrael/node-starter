import { hola } from './'

describe('hola', () => {
  test('testing hola output', () => {
    const result = hola(2)
    expect(result).toBe(3)
  })
})
