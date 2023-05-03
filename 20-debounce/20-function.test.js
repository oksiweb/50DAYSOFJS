const debounce = require("./20-function")

describe("debounce", () => {
  jest.useFakeTimers() // use fake timers to control timeouts in tests

  test("should debounce function calls", () => {
    const mockFn = jest.fn()
    const debouncedFn = debounce(mockFn, 1000)

    // Call the debounced function with a single argument
    debouncedFn("test")

    // The mock function should not have been called yet
    expect(mockFn).not.toBeCalled()

    // Advance the timer by 500ms
    jest.advanceTimersByTime(500)

    // The mock function should still not have been called
    expect(mockFn).not.toBeCalled()

    // Advance the timer by another 500ms
    jest.advanceTimersByTime(500)

    // The mock function should have been called once, with the provided argument
    expect(mockFn).toHaveBeenCalledTimes(1)
    expect(mockFn).toHaveBeenCalledWith("test")
  })
})
