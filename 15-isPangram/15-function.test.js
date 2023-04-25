const isPangram = require("./15-function")

describe("isPangram", () => {
  test('returns true for the pangram "The quick brown fox jumps over the lazy dog."', () => {
    const input = "The quick brown fox jumps over the lazy dog."
    expect(isPangram(input)).toBe(true)
  })

  test('returns false for the string "Hello world!"', () => {
    const input = "Hello world!"
    expect(isPangram(input)).toBe(false)
  })

  test('returns true for the string "Pack my box with five dozen liquor jugs."', () => {
    const input = "Pack my box with five dozen liquor jugs."
    expect(isPangram(input)).toBe(true)
  })

  // Add more tests here for other cases you want to check
})
