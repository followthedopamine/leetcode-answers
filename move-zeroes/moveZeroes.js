"use strict";
// https://leetcode.com/problems/move-zeroes
Object.defineProperty(exports, "__esModule", { value: true });
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left < right) {
        if (nums[left] === 0) {
            nums.splice(left, 1);
            nums.push(0);
            right--;
        }
        else {
            left++;
        }
    }
}
exports.default = moveZeroes;
;
