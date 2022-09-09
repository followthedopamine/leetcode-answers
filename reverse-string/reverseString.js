"use strict";
// https://leetcode.com/problems/reverse-string
Object.defineProperty(exports, "__esModule", { value: true });
/* Runtime: 95 ms, faster than 97.41% of TypeScript online submissions for Reverse String. */
/**
 Do not return anything, modify s in-place instead.
 */
const reverseString = (s) => {
    let left = 0;
    let right = s.length - 1;
    let temp = "";
    while (left < right) {
        temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        right--;
        left++;
    }
};
exports.default = reverseString;
