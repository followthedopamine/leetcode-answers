import assert from "assert";
import minimumRecolors from "../minimum-recolors-to-get-k-consecutive-black-blocks/minimumRecolors";

describe("minimumRecolors()", () => {
  it("Should return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.", () => {
    assert.equal(minimumRecolors("WBBWWBBWBW", 7), 3);
  });
  it("Should return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.", () => {
    assert.equal(minimumRecolors("WBWBBBW", 2), 0);
  });
});
