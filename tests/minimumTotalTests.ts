import assert from "assert";
import minimumTotal from "../triangle/minimumTotal";

describe("minimumTotal()", () => {
  it("Should return the minimum path sum from top to bottom.", () => {
    assert.equal(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]), 11);
  });
  it("Should work with only one path", () => {
    assert.equal(minimumTotal([[-10]]), -10);
  });
});
