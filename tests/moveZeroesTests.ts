import moveZeroes from "../move-zeroes/moveZeroes";
import assert from "assert";

describe("moveZeroes()", () => {
  it("Should move all 0's to the end of the array while maintaining the relative order of the non-zero elements.", () => {
    let nums = [0, 1, 0, 3, 12];
    moveZeroes(nums);
    assert.deepEqual(nums, [1, 3, 12, 0, 0]);
  });
  it("Should work with only one element in array", () => {
    let nums = [0];
    moveZeroes(nums);
    assert.deepEqual(nums, [0]);
  });
  it("Should work with changing index", () => {
    let nums = [0,0,1];
    moveZeroes(nums);
    assert.deepEqual(nums, [1,0,0]);
  })
});
