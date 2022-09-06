const assert = require("assert");
const search = require("../binary-search/search");

describe("search()", () => {
  it("Should return index when number exists in array", () => {
    assert.equal(search([-1, 0, 3, 5, 9, 12], 9), 4);
  });
  it("Should return -1 when number does not exist in array", () => {
    assert.equal(search([-1, 0, 3, 5, 9, 12], 2), -1);
  });
  it("Should return 0 when only item in array matches target", () => {
    assert.equal(search([5], 5), 0);
  });
  it("Should return correct index with only 2 items in array", () => {
    assert.equal(search([2, 5], 5), 1);
  });
});
