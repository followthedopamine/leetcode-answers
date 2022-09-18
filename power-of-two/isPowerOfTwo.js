"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://leetcode.com/problems/power-of-two
const isPowerOfTwo = (n) => {
    if (n === 1)
        return true;
    while (n > 1) {
        if (n === 2)
            return true;
        if (n % 2 === 0) {
            n = n / 2;
        }
        else {
            return false;
        }
    }
    return false;
};
exports.default = isPowerOfTwo;
