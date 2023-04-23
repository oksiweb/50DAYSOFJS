const spaceAge = require("./13-function")

describe("spaceAge", () => {
  it("should return the correct age on all planets for 31557600 seconds (1 Earth year)", () => {
    const result = spaceAge(31557600)
    expect(result).toEqual({
      Mercury: 4.15,
      Venus: 1.63,
      Earth: 1,
      Mars: 0.53,
      Jupiter: 0.08,
      Saturn: 0.03,
      Uranus: 0.01,
      Neptune: 0.01
    })
  })

  it("should return the correct age on all planets for 1000000000 seconds", () => {
    const result = spaceAge(1000000000)
    expect(result).toEqual({
      Mercury: 131.57,
      Venus: 51.51,
      Earth: 31.69,
      Mars: 16.85,
      Jupiter: 2.67,
      Saturn: 1.08,
      Uranus: 0.38,
      Neptune: 0.19
    })
  })
})
