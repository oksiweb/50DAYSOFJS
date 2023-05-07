const pipe = require("./27-function")
// Define the functions that add to the string
function addPrefix(str) {
  return "prefix-" + str
}

function addSuffix(str) {
  return str + "-suffix"
}

function toUppercase(str) {
  return str.toUpperCase()
}

describe("pipe", () => {
  test("should apply functions in the correct order", () => {
    const decorated = pipe(addPrefix, addSuffix, toUppercase)
    expect(decorated("hello")).toBe("PREFIX-HELLO-SUFFIX")
  })

  test("should maintain order when functions are piped in a different order", () => {
    const decorated = pipe(addPrefix, addSuffix, toUppercase) // changed order
    expect(decorated("hello")).toBe("PREFIX-HELLO-SUFFIX")
  })
})
