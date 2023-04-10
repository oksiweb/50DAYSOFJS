const reverseAString = require('./2-function');

describe('reverseAString', () => {
  test('reverses a string with even number of characters', () => {
    const str = 'abcdef';
    expect(reverseAString(str)).toBe('fedcba');
  });

  test('reverses a string with odd number of characters', () => {
    const str = 'abcde';
    expect(reverseAString(str)).toBe('edcba');
  });

  test('returns an empty string when given an empty string', () => {
    const str = '';
    expect(reverseAString(str)).toBe('');
  });

  test('returns the same string when given a single-character string', () => {
    const str = 'a';
    expect(reverseAString(str)).toBe('a');
  });
});
