"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://leetcode.com/problems/number-of-1-bits
const hammingWeight = (n) => {
    let count = 0;
    while (n > 0) {
        count += n & 1;
        n = n >>> 1;
    }
    return count;
};
exports.default = hammingWeight;
