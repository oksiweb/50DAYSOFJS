const randomNumberGeneratorInRange = require('./1-function');

describe('randomNumberGeneratorInRange', () => {
    test('generates a number within the given range', () => {
      const rangeStart = 5
      const rangeEnd = 100
      const randomNumber = randomNumberGeneratorInRange(rangeStart, rangeEnd)
      expect(randomNumber).toBeGreaterThanOrEqual(rangeStart)
      expect(randomNumber).toBeLessThanOrEqual(rangeEnd)
    })
  
    test('generates a number when rangeStart equals rangeEnd', () => {
      const rangeStart = 5
      const rangeEnd = 5
      const randomNumber = randomNumberGeneratorInRange(rangeStart, rangeEnd)
      expect(randomNumber).toEqual(rangeStart)
    })
  
    test('generates an integer when rangeStart and rangeEnd are integers', () => {
      const rangeStart = 5
      const rangeEnd = 100
      const randomNumber = randomNumberGeneratorInRange(rangeStart, rangeEnd)
      expect(Number.isInteger(randomNumber)).toBe(true)
    })
  })