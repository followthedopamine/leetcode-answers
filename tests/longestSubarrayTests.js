"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const longestSubarray_1 = __importDefault(require("../longest-subarray-of-1s-after-deleting-one-element/longestSubarray"));
describe("longestSubarray", () => {
    it("Should return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.", () => {
        assert_1.default.equal((0, longestSubarray_1.default)([1, 1, 0, 1]), 3);
    });
    it("Should return the size of the longest non-empty subarray containing only 1's in the resulting array. Return 0 if there is no such subarray.", () => {
        assert_1.default.equal((0, longestSubarray_1.default)([0, 1, 1, 1, 0, 1, 1, 0, 1]), 5);
    });
});
