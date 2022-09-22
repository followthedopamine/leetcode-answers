// https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/
// Time 31:19.82
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const minimumDifference = function (nums, k) {
  nums = nums.sort((a, b) => b - a);
  let minDiff = Infinity;
  for (let i = 0; i < nums.length - k + 1; i++) {
    const difference = nums[i] - nums[i + k - 1];
    minDiff = Math.min(minDiff, difference);
  }
  return minDiff;
};
