import assert from "assert";
import longestSubarray from "../longest-subarray-of-1s-after-deleting-one-element/longestSubarray";

describe("longestSubarray", () => {
  it("Should return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.", () => {
    assert.equal(longestSubarray([1, 1, 0, 1]), 3);
  });
  it("Should return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.", () => {
    assert.equal(longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]), 5);
  });
  it("Should return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.", () => {
    assert.equal(longestSubarray([1, 1, 1]), 2);
  });
});
