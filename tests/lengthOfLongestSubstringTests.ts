import assert from "assert";
import lengthOfLongestSubstring from "../longest-substring-without-repeating-characters/lengthOfLongestSubstring";

describe("lengthOfLongestSubstring()", () => {
    it("Should find the length of the longest substring without repeating characters.", () => {
        assert.equal(lengthOfLongestSubstring("abcabcbb"), 3);
    });
    it("Should find the length of the longest substring when characters repeat.", () => {
        assert.equal(lengthOfLongestSubstring("bbbbb"), 1);
    });
    it("Should find the length of the longest substring without repeating characters.", () => {
        assert.equal(lengthOfLongestSubstring("pwwkew"), 3);
    });
});