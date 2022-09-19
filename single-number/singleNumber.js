"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://leetcode.com/problems/single-number/
const singleNumber = (nums) => {
    let result = nums[0];
    for (let i = 1; i < nums.length; i++) {
        result = result ^ nums[i];
    }
    return result;
};
exports.default = singleNumber;
