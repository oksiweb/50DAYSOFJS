const isEmpty = require('./9-function')

describe("isEmpty", () => {
    test("returns true for an empty object", () => {
      expect(isEmpty({})).toBe(true);
    });
  
    test("returns false for an object with properties", () => {
      expect(isEmpty({ key: 1 })).toBe(false);
    });
  
    test("returns true for an object with only non-enumerable properties", () => {
      const obj = {};
      Object.defineProperty(obj, "key", { value: 1, enumerable: false });
      expect(isEmpty(obj)).toBe(true);
    });
});