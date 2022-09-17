import assert from "assert";
import climbStairs from "../climbing-stairs/climbStairs";

describe("climbStairs()", () => {
  it("Should return the number of distinct ways you can climb to the top", () => {
    assert.equal(climbStairs(2), 2);
  });
  it("Should return the number of distinct ways you can climb to the top", () => {
    assert.equal(climbStairs(3), 3);
  });
});
