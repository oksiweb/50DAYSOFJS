const getDaysBetweenDates = require('./8-function');

describe('getDaysBetweenDates', () => {
  test('valid dates in same year', () => {
    expect(getDaysBetweenDates('01/01/2022', '12/31/2022')).toBe(364);
  });

  test('valid dates in different years', () => {
    expect(getDaysBetweenDates('12/31/2021', '01/01/2023')).toBe(366);
  });

  test('valid dates with leading zeroes', () => {
    expect(getDaysBetweenDates('05/01/2022', '05/05/2022')).toBe(4);
  });

});
