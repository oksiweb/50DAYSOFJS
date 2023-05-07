const compose = require("./28-function")

describe("compose", () => {
  test("compose should return the result of calling the composed functions", () => {
    const add = a => a + 2
    const double = x => x * 2
    const square = x => x * x

    const composedFunc = compose(square, double, add)
    expect(composedFunc(2)).toBe(64)
  })
})
