import assert from "assert";
import rob from "../house-robber/rob";

describe("rob()", () => {
  it("Should return the maximum amount of money you can rob tonight without alerting the police.", () => {
    assert.equal(rob([1, 2, 3, 1]), 4);
  });
  it("Should return the maximum amount of money you can rob tonight without alerting the police.", () => {
    assert.equal(rob([2, 7, 9, 3, 1]), 12);
  });
});
