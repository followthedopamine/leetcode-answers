// https://leetcode.com/problems/rotate-array/

/*Runtime: 96 ms, faster than 96.12% of JavaScript online submissions for Rotate Array.
Memory Usage: 52 MB, less than 56.94% of JavaScript online submissions for Rotate Array.*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotateArray = (nums, k) => {
  let endIndex = nums.length - (k % nums.length);
  console.log(k, endIndex);
  let endArray = nums.splice(endIndex);
  console.log(endArray, nums);

  nums.unshift(...endArray);
};

module.exports = rotateArray;
