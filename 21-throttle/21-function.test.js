const throttle = require("./21-function")

describe("throttle", () => {
  let func
  let throttledFunc

  beforeEach(() => {
    func = jest.fn()
    throttledFunc = throttle(func, 1000)
  })

  afterEach(() => {
    jest.clearAllTimers()
  })

  test("should only call the function once when called multiple times within the delay", () => {
    throttledFunc()
    throttledFunc()
    throttledFunc()
    expect(func).toHaveBeenCalledTimes(1)
  })

  test("should call the function again after the delay", done => {
    throttledFunc()
    setTimeout(() => {
      throttledFunc()
      expect(func).toHaveBeenCalledTimes(2)
      done()
    }, 1500)
  })

  test("should pass arguments to the original function", () => {
    const arg1 = "test"
    const arg2 = 123
    throttledFunc(arg1, arg2)
    expect(func).toHaveBeenCalledWith(arg1, arg2)
  })
})
