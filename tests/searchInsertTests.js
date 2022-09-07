const assert = require("assert");
const searchInsert = require("../search-insert-position/searchInsert");

describe("searchInsert()", () => {
  it("Should return the index if target is found", () => {
    assert.equal(searchInsert([1, 3, 5, 6], 5), 2);
  });
  it("Should return the index where it would go if target is not found", () => {
    assert.equal(searchInsert([1, 3, 5, 6], 2), 1);
  });
  it("Should return the index where it would go if target would be last in list", () => {
    assert.equal(searchInsert([1, 3, 5, 6], 7), 4);
  });
  it("Should return 0 if target would be first in list", () => {
    assert.equal(searchInsert([1, 2, 3, 5, 7], 0), 0);
  });
  it("Should return the index found if there is only one item in array", () => {
    assert.equal(searchInsert([1], 1), 0);
  });
});
