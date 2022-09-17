import assert from "assert";
import isPowerOfTwo from "../power-of-two/isPowerOfTwo";

describe("isPowerOfTwo()", () => {
  it("Should return true if n is a power of two", () => {
    assert.equal(isPowerOfTwo(1), true);
  });
  it("Should return true if n is a power of two", () => {
    assert.equal(isPowerOfTwo(16), true);
  });
  it("Should return true if n is a power of two", () => {
    assert.equal(isPowerOfTwo(3), false);
  });
});
