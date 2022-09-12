"use strict";
// https://leetcode.com/problems/contains-duplicate-ii/
Object.defineProperty(exports, "__esModule", { value: true });
const containsNearbyDuplicate = (nums, k) => {
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (i - map[nums[i]] <= k) {
            return true;
        }
        map[nums[i]] = i;
    }
    return false;
};
exports.default = containsNearbyDuplicate;
