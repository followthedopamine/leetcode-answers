import checkInclusion from "../permutation-in-string/checkInclusion";
import assert from "assert";

describe("checkInclusion()", () => {
  it("Should return true if s2 contains a permutation of s1", () => {
    const s1: string = "ab";
    const s2: string = "eidbaooo";
    assert.equal(checkInclusion(s1, s2), true);
  });
  it("Should return false if s2 does not contain a permutation of s1", () => {
    const s1: string = "ab";
    const s2: string = "eidboaoo";
    assert.equal(checkInclusion(s1, s2), false);
  });
  it("Should return true if s2 contains a permutation of s1", () => {
    const s1: string = "abb";
    const s2: string = "eidbabooo";
    assert.equal(checkInclusion(s1, s2), true);
  });
  it("Should return true if s2 contains a permutation of s1 with an s1.length of 1", () => {
    const s1: string = "a";
    const s2: string = "ab";
    assert.equal(checkInclusion(s1, s2), true);
  });
  it("Should return true if s2 contains a permutation of s1", () => {
    const s1: string = "adc";
    const s2: string = "dcda";
    assert.equal(checkInclusion(s1, s2), true);
  });
});
