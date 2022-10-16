// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    const prevNum = nums[i - 1];
    const num = nums[i];
    if (num === prevNum) {
      nums.splice(i, 1);
      i--;
    }
  }
  console.log(nums);
  return nums.length;
};

console.log(removeDuplicates([1, 1, 2])); // 2 [1,2, _]
console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])); // 5 [0,1,2,3,4,_,_,_,_,_]

// One method would be to loop through the array, change duplicates to underscores and then sort
// I think I can just remove duplicates and return nums.length though
// This problem is a lot more difficult in other languages.
// Probably should have tried to solve it like them.
