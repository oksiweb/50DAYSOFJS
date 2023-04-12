const convertTo24HrsFormat = require('./4-function');

describe("convertTo24HrsFormat", () => {
  test("converts '12:10AM' to '00:10'", () => {
    expect(convertTo24HrsFormat('12:10AM')).toBe('00:10');
  });

  test("converts '6:30PM' to '18:30'", () => {
    expect(convertTo24HrsFormat('6:30PM')).toBe('18:30');
  });

  test("converts '12:00PM' to '12:00'", () => {
    expect(convertTo24HrsFormat('12:00PM')).toBe('12:00');
  });

  test("converts '12:00AM' to '00:00'", () => {
    expect(convertTo24HrsFormat('12:00AM')).toBe('00:00');
  });

  test("converts '5:00AM' to '05:00'", () => {
    expect(convertTo24HrsFormat('5:00AM')).toBe('05:00');
  });
});
