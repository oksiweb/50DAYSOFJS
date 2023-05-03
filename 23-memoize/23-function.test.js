const memoize = require("./23-function")

describe("memoize function", () => {
  it("caches the result of a function call", () => {
    const originalFunction = jest.fn((a, b) => a + b)
    const memoizedFunction = memoize(originalFunction)

    // Call the memoized function twice with the same arguments
    const result1 = memoizedFunction(2, 3)
    const result2 = memoizedFunction(2, 3)

    // Expect the original function to have been called only once
    expect(originalFunction).toHaveBeenCalledTimes(1)

    // Expect the memoized function to return the correct result both times
    expect(result1).toBe(5)
    expect(result2).toBe(5)
  })

  it("caches the result of a function call with different arguments", () => {
    const originalFunction = jest.fn((a, b) => a + b)
    const memoizedFunction = memoize(originalFunction)

    // Call the memoized function with two different sets of arguments
    const result1 = memoizedFunction(2, 3)
    const result2 = memoizedFunction(4, 5)

    // Expect the original function to have been called twice
    expect(originalFunction).toHaveBeenCalledTimes(2)

    // Expect the memoized function to return the correct results
    expect(result1).toBe(5)
    expect(result2).toBe(9)
  })
})
