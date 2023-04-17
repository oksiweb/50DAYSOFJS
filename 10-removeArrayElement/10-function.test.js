const removeArrayElement = require('./10-function');

describe("removeArrayElement", () => {
    test("removes object from array with matching field value", () => {
      const array = [
        { field: "id", operator: "eq" },
        { field: "cStatus", operator: "eq" },
        { field: "money", operator: "eq" },
      ];
      const filterField = "money";
      const expectedArray = [
        { field: "id", operator: "eq" },
        { field: "cStatus", operator: "eq" },
      ];
      expect(removeArrayElement(array, filterField)).toEqual(expectedArray);
    });
  
    test("returns the same array if no matching field value is found", () => {
      const array = [
        { field: "id", operator: "eq" },
        { field: "cStatus", operator: "eq" },
        { field: "money", operator: "eq" },
      ];
      const filterField = "status";
      expect(removeArrayElement(array, filterField)).toEqual(array);
    });
  
    test("returns an empty array if given an empty array", () => {
      const array = [];
      const filterField = "money";
      expect(removeArrayElement(array, filterField)).toEqual([]);
    });
});
  