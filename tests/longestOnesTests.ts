import assert from "assert";
import longestOnes from "../max-consecutive-ones-iii/longestOnes";

describe("longestOnes()", () => {
  it("Should return the maximum number of consecutive 1's in the array if you can flip at most k 0's.", () => {
    assert.equal(longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2), 6);
  });
  it("Should return the maximum number of consecutive 1's in the array if you can flip at most k 0's.", () => {
    assert.equal(
      longestOnes([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3),
      10
    );
  });
});
