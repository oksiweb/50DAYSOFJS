const curry = require("./25-function")

describe("curry", () => {
  test("should return a function when called with a function", () => {
    const result = curry(() => {})
    expect(typeof result).toBe("function")
  })

  test("should return a function that can be called with more than the expected number of arguments", () => {
    const func = jest.fn()
    const curried = curry(func, 2)
    curried(1, 2, 3)
    expect(func).toHaveBeenCalledWith(1, 2, 3)
  })

  test("should return a function that can be called with the expected number of arguments", () => {
    const func = jest.fn()
    const curried = curry(func, 2)
    curried(1, 2)
    expect(func).toHaveBeenCalledWith(1, 2)
  })
})

// Define the function that calculates the distance between two points
function distance(x1, y1, x2, y2) {
  return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
}

describe("curry", () => {
  test("should return a function that can be called with less than the expected number of arguments", () => {
    const func = jest.fn()
    const curried = curry(func, 3)

    // Add mock implementation for `distance` function
    const distanceMock = jest.fn((x1, y1, x2, y2) => x1 + y1 + x2 + y2)
    const distanceFromOrigin = curry(distanceMock, 3)(0, 0)

    expect(func).not.toHaveBeenCalled()
    expect(distanceMock).not.toHaveBeenCalled()

    const result = distanceFromOrigin(1, 1)

    expect(distanceMock).toHaveBeenCalledWith(0, 0, 1, 1)
    expect(result).toEqual(2)
  })
})
