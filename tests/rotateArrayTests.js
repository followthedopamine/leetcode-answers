const assert = require("assert");
const rotateArray = require("../rotate-array/rotateArray");

// TODO: Change tests to work with modifying the array in place
describe("rotateArray()", () => {
  it("Should rotate the array to the right by k steps, where k is non-negative.", () => {
    assert.deepEqual(
      rotateArray([1, 2, 3, 4, 5, 6, 7], 3),
      [5, 6, 7, 1, 2, 3, 4]
    );
  });
  it("Should rotate the array to the right by k steps, where k is non-negative.", () => {
    assert.deepEqual(rotateArray([-1, -100, 3, 99], 2), [3, 99, -1, -100]);
  });
  it("Should work when k is higher than nums.length", () => {
    assert.deepEqual(rotateArray([1, 2], 5), [2, 1]);
  });
});
