const colorCode = require("./19-function")

describe("Resistor Colors", () => {
  describe("Color codes", () => {
    test("Black", () => {
      expect(colorCode("black")).toEqual(0)
    })

    test("White", () => {
      expect(colorCode("white")).toEqual(9)
    })

    test("Orange", () => {
      expect(colorCode("orange")).toEqual(3)
    })

    test("Non-existent color", () => {
      expect(colorCode("purple")).toBeUndefined()
    })
  })
})
