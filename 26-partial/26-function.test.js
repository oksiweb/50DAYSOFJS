const partial = require("./26-function")

describe("partial", () => {
  test("should return a function with partial arguments", () => {
    const sum = (a, b, c) => a + b + c
    const partialSum = partial(sum, 1, 2)
    expect(partialSum(3)).toBe(6)
  })

  test("should return a function with partial arguments that can be called multiple times", () => {
    const multiply = (a, b) => a * b
    const partialMultiply = partial(multiply, 2)
    expect(partialMultiply(3)).toBe(6)
    expect(partialMultiply(4)).toBe(8)
    expect(partialMultiply(5)).toBe(10)
  })

  test("should return a function that can be partially applied multiple times", () => {
    const multiply = (a, b, c) => a * b * c
    const partialMultiply1 = partial(multiply, 2)
    const partialMultiply2 = partial(partialMultiply1, 3)
    expect(partialMultiply2(4)).toBe(24)
  })
})
