// https://leetcode.com/problems/maximum-average-subarray-i
// Time: 7:27.97
// One failed submit, didn't account for negative numbers not being higher than largest = 0
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = (nums, k) => {
  let largest = -Infinity;
  let current = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (i < k) {
      current += nums[i];
    } else {
      largest = Math.max(largest, current);
      current += nums[i];
      current -= nums[i - k];
    }
  }
  return largest / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
console.log(findMaxAverage([5], 1));
console.log(findMaxAverage([-1], 1));
