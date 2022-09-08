const assert = require("assert");
const rotateArray = require("../rotate-array/rotateArray");

describe("rotateArray()", () => {
  it("Should rotate the array to the right by k steps, where k is non-negative.", () => {
    let nums = [1, 2, 3, 4, 5, 6, 7];
    rotateArray(nums, 3);
    assert.deepEqual(nums, [5, 6, 7, 1, 2, 3, 4]);
  });
  it("Should rotate the array to the right by k steps, where k is non-negative.", () => {
    let nums = [-1, -100, 3, 99];
    rotateArray(nums, 2);
    assert.deepEqual(nums, [3, 99, -1, -100]);
  });
  it("Should work when k is higher than nums.length", () => {
    assert.deepEqual(rotateArray([1, 2], 5), [2, 1]);
    let nums = [1, 2];
    rotateArray(nums, 5);
    assert.deepEqual(nums, [2, 1]);
  });
});
