"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://leetcode.com/problems/permutations
/* Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order. */
const permute = (nums) => {
    let results = [];
    const size = nums.length;
    const backtrack = (tempList) => {
        if (tempList.length === size)
            return results.push(tempList);
        for (let i = 0; i < size; i++) {
            if (!tempList.includes(nums[i])) {
                tempList.push(nums[i]);
                backtrack(tempList.slice());
                tempList.pop();
            }
        }
    };
    backtrack([]);
    return results;
};
exports.default = permute;
