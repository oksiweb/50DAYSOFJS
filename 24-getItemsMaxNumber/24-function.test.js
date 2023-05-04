const getItemsMaxNumber = require("./24-function")

describe("getItemsMaxNumber", () => {
  it("returns the maximum number in the name field of the given items array", () => {
    const items = [{ name: "item 1" }, { name: "item 2" }, { name: "item 11" }, { name: "item 3" }, { name: "item 10" }]
    expect(getItemsMaxNumber(items)).toBe(11)
  })

  it("returns 0 when no numbers are found in the items' name fields", () => {
    const items = [{ name: "item one" }, { name: "item two" }, { name: "item three" }]
    expect(getItemsMaxNumber(items)).toBe(0)
  })

  it("returns 0 when the items array is empty", () => {
    const items = []
    expect(getItemsMaxNumber(items)).toBe(0)
  })
})
