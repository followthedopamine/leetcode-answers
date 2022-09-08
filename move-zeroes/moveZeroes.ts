// https://leetcode.com/problems/move-zeroes

/**
 Do not return anything, modify nums in-place instead.
 */
export default function moveZeroes(nums: number[]): void {
    let left: number = 0;
    let right: number = nums.length - 1;
    while(left < right) {
        if(nums[left] === 0) {
            nums.splice(left, 1)
            nums.push(0);
            right--;
        } else {
            left++;
        }
    }
};