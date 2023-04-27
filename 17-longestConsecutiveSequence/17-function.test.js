const longestConsecutiveSequence = require("./17-function")

describe("longestConsecutiveSequence", () => {
  test("returns the correct length for a sorted array", () => {
    const inputArray = [1, 2, 3, 4, 5, 6, 7, 8]
    const result = longestConsecutiveSequence(inputArray)
    expect(result).toEqual(8)
  })

  test("returns the correct length for an unsorted array", () => {
    const inputArray = [100, 4, 200, 1, 3, 2]
    const result = longestConsecutiveSequence(inputArray)
    expect(result).toEqual(4)
  })

  test("returns 1 for an array with one element", () => {
    const inputArray = [100]
    const result = longestConsecutiveSequence(inputArray)
    expect(result).toEqual(1)
  })

  test("returns 0 for an empty array", () => {
    const inputArray = []
    const result = longestConsecutiveSequence(inputArray)
    expect(result).toEqual(0)
  })
})