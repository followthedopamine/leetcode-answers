"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://leetcode.com/problems/find-the-k-beauty-of-a-number/
const divisorSubstrings = (num, k) => {
    const chars = num.toString().split("");
    let window = parseInt(chars[0]);
    let count = 0;
    let multiplier = 10;
    for (let i = 1; i < k; i++) {
        const digit = parseInt(chars[i]);
        window = window * 10 + digit;
        multiplier *= 10;
    }
    if (num % window === 0)
        count++;
    for (let i = k; i < chars.length; i++) {
        const digit = parseInt(chars[i]);
        const prevDigit = parseInt(chars[i - k]);
        window = window * 10 + digit;
        0;
        window -= prevDigit * multiplier;
        if (num % window === 0)
            count++;
    }
    return count;
};
exports.default = divisorSubstrings;
