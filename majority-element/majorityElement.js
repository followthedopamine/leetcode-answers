// https://leetcode.com/problems/majority-element/submissions/
/* Runtime: 64 ms, faster than 98.56% of JavaScript online submissions for Majority Element.
Memory Usage: 43.6 MB, less than 73.87% of JavaScript online submissions for Majority Element. */

/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
  const map = {};
  const goal = Math.ceil(nums.length / 2);
  for (let num of nums) {
    map[num] = map[num] + 1 || 1;
    if (map[num] >= goal) return num;
  }
};

console.log(majorityElement([3, 2, 3])); // 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // 2
