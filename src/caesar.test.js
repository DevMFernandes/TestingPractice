import caesar from './caesar'

test('intro', () => {
  expect(caesar('hello', 2)).toBe('jgnnq')
})

test('wrap', () => {
  expect(caesar('zebra', 1)).toBe('afcsb')
})

test('same case', () => {
  expect(caesar('HeLLo', 2)).toBe('JgNNq')
})

test('puncuation', () => {
  expect(caesar('he.llo', 2)).toBe('jg.nnq')
})
