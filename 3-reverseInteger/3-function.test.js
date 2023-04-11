const reverseGivenInteger = require('./3-function');

describe('reverseGivenInteger', () => {
  test('should return 0 when given 0', () => {
    expect(reverseGivenInteger(0)).toBe(0);
  });

  test('should reverse positive integers', () => {
    expect(reverseGivenInteger(123)).toBe(321);
    expect(reverseGivenInteger(3849)).toBe(9483);
    expect(reverseGivenInteger(120)).toBe(21);
  });

  test('should reverse negative integers', () => {
    expect(reverseGivenInteger(-123)).toBe(-321);
    expect(reverseGivenInteger(-3849)).toBe(-9483);
  });

  test('should preserve leading zeros', () => {
    expect(reverseGivenInteger(10)).toBe(1);
    expect(reverseGivenInteger(100)).toBe(1);
  });
});