"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const lengthOfLongestSubstring_1 = __importDefault(require("../longest-substring-without-repeating-characters/lengthOfLongestSubstring"));
describe("lengthOfLongestSubstring()", () => {
    it("Should find the length of the longest substring without repeating characters.", () => {
        assert_1.default.equal((0, lengthOfLongestSubstring_1.default)("abcabcbb"), 3);
    });
    it("Should find the length of the longest substring when characters repeat.", () => {
        assert_1.default.equal((0, lengthOfLongestSubstring_1.default)("bbbbb"), 1);
    });
    it("Should find the length of the longest substring without repeating characters.", () => {
        assert_1.default.equal((0, lengthOfLongestSubstring_1.default)("pwwkew"), 3);
    });
});
