import assert from "assert";
import hammingWeight from "../number-of-1-bits/hammingWeight";

describe("hammingWeight()", () => {
  it("Should take an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).", () => {
    assert.equal(hammingWeight(0o1011), 3);
  });
  it("Should take an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).", () => {
    assert.equal(hammingWeight(0o10000000), 1);
  });
  it("Should take an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).", () => {
    assert.equal(hammingWeight(11111111111111111111111111111101), 31);
  });
});
