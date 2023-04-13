const getTheGapX = require('./5-function');

describe('getTheGapX', () => {
  test('should return the gap between the Xs in a string', () => {
    const str = 'XeroX';
    expect(getTheGapX(str)).toBe(4);
  });

  test('should return -1 if no Xs are present in the string', () => {
    const str = 'hello';
    expect(getTheGapX(str)).toBe(-1);
  });

  test('should return 0 if only one X is present in the string', () => {
    const str = 'X';
    expect(getTheGapX(str)).toBe(0);
  });

  test('should return -1 if only one X is present in the string', () => {
    const str = 'hello world';
    expect(getTheGapX(str)).toBe(-1);
  });
});
