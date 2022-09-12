import countGoodSubstrings from "../substrings-of-size-three-with-distinct-characters/countGoodSubstrings";
import assert from "assert";

describe("countGoodSubstrings()", () => {
  it("Should return the number of substrings with no repeating characters of length three in s", () => {
    assert.equal(countGoodSubstrings("xyzzaz"), 1);
  });
  it("Should return the number of substrings with no repeating characters of length three in s", () => {
    assert.equal(countGoodSubstrings("aababcabc"), 4);
  });
});
