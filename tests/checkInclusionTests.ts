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
});