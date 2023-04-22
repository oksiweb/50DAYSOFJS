const sayNumberInEnglish = require("./11-function")

describe("sayNumberInEnglish", () => {
  test('returns "zero" for input 0', () => {
    expect(sayNumberInEnglish(0)).toBe("zero")
  })

  test('returns "fourteen" for input 14', () => {
    expect(sayNumberInEnglish(14)).toBe("fourteen")
  })

  test('returns "fifty" for input 50', () => {
    expect(sayNumberInEnglish(50)).toBe("fifty")
  })

  test('returns "ninety-eight" for input 98', () => {
    expect(sayNumberInEnglish(98)).toBe("ninety-eight")
  })

  test("throws an error for input -1", () => {
    expect(() => sayNumberInEnglish(-1)).toThrowError("Number out of range (0-999,999,999,999)")
  })

  test('returns "one hundred" for input 100', () => {
    expect(sayNumberInEnglish(100)).toBe("one hundred")
  })

  test('returns "one thousand two hundred thirty-four" for input 1234', () => {
    expect(sayNumberInEnglish(1234)).toBe("one thousand two hundred thirty-four")
  })

  test('returns "twelve thousand three hundred forty-five" for input 12345', () => {
    expect(sayNumberInEnglish(12345)).toBe("twelve thousand three hundred forty-five")
  })

  test('returns "one million two hundred thirty-four thousand five hundred sixty-seven" for input 1234567', () => {
    expect(sayNumberInEnglish(1234567)).toBe("one million two hundred thirty-four thousand five hundred sixty-seven")
  })

  test('returns "one billion two hundred thirty-four million five hundred sixty-seven thousand eight hundred ninety" for input 1234567890', () => {
    expect(sayNumberInEnglish(1234567890)).toBe("one billion two hundred thirty-four million five hundred sixty-seven thousand eight hundred ninety")
  })

  test("throws an error for input 1000000000000", () => {
    expect(() => sayNumberInEnglish(1000000000000)).toThrowError("Number out of range (0-999,999,999,999)")
  })
})
