const fibonacci = require("./12-function")

describe("fibonacci", () => {
  test("returns 0 for input 0", () => {
    expect(fibonacci(0)).toBe(0)
  })

  test("returns 1 for input 1", () => {
    expect(fibonacci(1)).toBe(1)
  })

  test("returns 5 for input 5", () => {
    expect(fibonacci(5)).toBe(5)
  })

  test("returns 89 for input 11", () => {
    expect(fibonacci(11)).toBe(89)
  })

  test("returns 144 for input 12", () => {
    expect(fibonacci(12)).toBe(144)
  })

  test("handles large inputs", () => {
    expect(fibonacci(40)).toBe(102334155)
  })
})
