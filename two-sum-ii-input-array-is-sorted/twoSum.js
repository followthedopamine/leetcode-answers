"use strict";
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/submissions/
Object.defineProperty(exports, "__esModule", { value: true });
/*Runtime: 87 ms, faster than 82.22% of TypeScript online submissions for Two Sum II - Input Array Is Sorted.
Memory Usage: 43.8 MB, less than 62.81% of TypeScript online submissions for Two Sum II - Input Array Is Sorted.*/
const twoSum = (numbers, target) => {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right) {
        let current = numbers[left] + numbers[right];
        if (current === target) {
            return [left + 1, right + 1];
        }
        if (current < target) {
            left++;
        }
        if (current > target) {
            right--;
        }
    }
    return [-1, -1];
};
exports.default = twoSum;
