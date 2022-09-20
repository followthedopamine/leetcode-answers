import assert from "assert";
import divisorSubstrings from "../find-the-k-beauty-of-a-number/divisorSubstrings";

describe("divisorSubstrings()", () => {
  it("Should return the k-beauty of num.", () => {
    assert.equal(divisorSubstrings(240, 2), 2);
  });
  it("Should return the k-beauty of num.", () => {
    assert.equal(divisorSubstrings(430043, 2), 2);
  });
  it("Should return the k-beauty of num.", () => {
    assert.equal(divisorSubstrings(10, 1), 1);
  });
});
