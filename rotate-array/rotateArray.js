// https://leetcode.com/problems/rotate-array/
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotateArray = (nums, k) => {
  let endIndex = nums.length % k;
  let endArray = nums.splice(endIndex);

  nums.unshift(...endArray);
  return nums;
};

module.exports = rotateArray;
