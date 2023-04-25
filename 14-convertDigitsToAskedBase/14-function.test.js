const convertDigitsToAskedBase = require("./14-function")

describe("convertDigitsToAskedBase", () => {
  test("convert 58 in base 10 to base 16", () => {
    expect(convertDigitsToAskedBase([5, 8], 10, 16)).toEqual([3, 10])
  })

  test("convert 101101 in base 2 to base 10", () => {
    expect(convertDigitsToAskedBase([1, 0, 1, 1, 0, 1], 2, 10)).toEqual([4, 5])
  })

  test("convert 0 in base 10 to base 16", () => {
    expect(convertDigitsToAskedBase([0], 10, 16)).toEqual([0])
  })

  test("convert 255 in base 10 to base 16", () => {
    expect(convertDigitsToAskedBase([2, 5, 5], 10, 16)).toEqual([15, 15])
  })
})
