const truncateWithWordLimit = require('./6-function');

describe('truncateWithWordLimit', () => {
  it('should return an empty string if the input string is empty', () => {
    expect(truncateWithWordLimit('', 3)).toBe('');
  });

  it('should return an empty string if the word limit is zero or negative', () => {
    expect(truncateWithWordLimit('JavaScript is simple', -1)).toBe('');
    expect(truncateWithWordLimit('JavaScript is simple', 0)).toBe('');
  });

  it('should return the original string if the word limit is greater than the number of words in the string', () => {
    expect(truncateWithWordLimit('JavaScript is simple', 10)).toBe('JavaScript is simple');
  });

  it('should truncate the string to the specified number of words', () => {
    expect(truncateWithWordLimit('JavaScript is simple', 3)).toBe('JavaScript is simple');
    expect(truncateWithWordLimit('Codedamn is the best place to learn to code', 5)).toBe('Codedamn is the best place');
  });

  it('should handle leading and trailing whitespace', () => {
    expect(truncateWithWordLimit('  JavaScript is simple  ', 3)).toBe('JavaScript is simple');
  });
});