import assert from "assert";
import reverseBits from "../reverse-bits/reverseBits";

describe("reverseBits()", () => {
  it("Should reverse bits of a given 32 bits unsigned integer.", () => {
    assert.equal(reverseBits(11111111111111111111111111111101), 3221225471);
  });
});
