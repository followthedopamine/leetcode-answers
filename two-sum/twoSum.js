// https://leetcode.com/problems/two-sum/
// Time 3:14.51
/* Runtime: 58 ms, faster than 99.63% of JavaScript online submissions for Two Sum.
Memory Usage: 42.6 MB, less than 60.38% of JavaScript online submissions for Two Sum. */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] > -1) {
      return [map[target - nums[i]], i];
    } else {
      map[nums[i]] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0,1]
console.log(twoSum([3, 2, 4], 6)); // [1,2]
console.log(twoSum([3, 3], 6)); // [0,1]
