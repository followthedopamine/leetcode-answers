import assert from "assert";
import numOfSubarrays from "../number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/numOfSubarrays";

describe("numOfSubArrays()", () => {
  it("Should given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.", () => {
    assert.equal(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4), 3);
  });
  it("Should given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.", () => {
    assert.equal(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5), 6);
  });
});
