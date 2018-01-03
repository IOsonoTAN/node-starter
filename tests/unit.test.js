const sum = (a, b) => a + b
const minus = (a, b) => a - b

test('Adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})

test('Minus 2 - 5 to equal 3', () => {
  expect(minus(5, 2)).toBe(3)
})
