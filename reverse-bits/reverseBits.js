"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://leetcode.com/problems/reverse-bits
const reverseBits = (n) => {
    let str = n.toString(2).split("");
    str.unshift(...new Array(32 - str.length).fill(0));
    return parseInt(str.reverse().join(""), 2);
};
exports.default = reverseBits;
