// https://leetcode.com/problems/search-insert-position/

/**
 *
 * @param {number[]} nums
 * @param {number} target
 * @returns {number}
 */

const searchInsert = (nums, target) => {
  let left = 0;
  let middle = 0;
  let right = nums.length - 1;
  if (nums[left] > target) return left;
  if (nums[right] < target) return right + 1;
  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) return middle;
    if (left + 1 == right) return right;
    if (nums[middle] < target) {
      left = middle;
    }
    if (nums[middle] > target) {
      right = middle;
    }
  }
};

module.exports = searchInsert;
