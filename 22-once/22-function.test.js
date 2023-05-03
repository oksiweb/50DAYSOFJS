const once = require("./22-function")

describe("once", () => {
  test("should return the result of the function on first call", () => {
    const fn = jest.fn(() => "result")
    const onceFn = once(fn)
    const result = onceFn()
    expect(result).toBe("result")
    expect(fn).toHaveBeenCalledTimes(1)
  })

  test("should return cached result on subsequent calls", () => {
    const fn = jest.fn(() => "result")
    const onceFn = once(fn)
    onceFn()
    const cachedResult = onceFn()
    expect(cachedResult).toBe("result")
    expect(fn).toHaveBeenCalledTimes(1)
  })

  test("should call the function with correct arguments and context", () => {
    const context = { name: "John" }
    const fn = jest.fn(function (arg1, arg2) {
      return `${this.name} ${arg1} ${arg2}`
    })
    const onceFn = once(fn)
    const result = onceFn.call(context, "is", "awesome")
    expect(result).toBe("John is awesome")
    expect(fn).toHaveBeenCalledTimes(1)
    expect(fn).toHaveBeenCalledWith("is", "awesome")
    expect(fn).toHaveBeenLastCalledWith("is", "awesome")
    expect(fn.mock.instances[0]).toBe(context)
  })
})
