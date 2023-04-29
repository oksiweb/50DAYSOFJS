const { grainsOn, totalGrains } = require("./18-function")

describe("totalGrains function", () => {
  test("should return the total number of grains on a chessboard", () => {
    expect(totalGrains()).toBe(18446744073709551615n)
  })
})

describe("grainsOn function", () => {
  test("should return the number of grains on the 5th square", () => {
    expect(grainsOn(5)).toBe(16n)
  })

  test("should return the number of grains on the 1st square", () => {
    expect(grainsOn(1)).toBe(1n)
  })

  test("should return the number of grains on the 64th square", () => {
    expect(grainsOn(64)).toBe(9223372036854775808n)
  })

  test("should return the number of grains on the 10th square", () => {
    expect(grainsOn(10)).toBe(512n)
  })
})
