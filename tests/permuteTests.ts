import assert from "assert";
import permute from "../permutations/permute";

describe("permute()", () => {
  it("Should given an array nums of distinct integers, return all the possible permutations", () => {
    assert.deepEqual(
      permute([1, 2, 3]).sort(),
      [
        [1, 2, 3],
        [1, 3, 2],
        [2, 1, 3],
        [2, 3, 1],
        [3, 1, 2],
        [3, 2, 1],
      ].sort()
    );
  });
  it("Should given an array nums of distinct integers, return all the possible permutations", () => {
    assert.deepEqual(
      permute([0, 1]).sort(),
      [
        [0, 1],
        [1, 0],
      ].sort()
    );
  });
  it("Should given an array with one number return one permutation", () => {
    assert.deepEqual(permute([1]).sort(), [[1]].sort());
  });
});
