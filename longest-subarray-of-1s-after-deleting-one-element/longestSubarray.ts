// https://leetcode.com/problems/longest-subarray-of-1s-after-deleting-one-element/
/* Runtime: 76 ms, faster than 90.00% of TypeScript online submissions for Longest Subarray of 1's After Deleting One Element.
Memory Usage: 47.9 MB, less than 60.00% of TypeScript online submissions for Longest Subarray of 1's After Deleting One Element. */
const longestSubarray = (nums: number[]): number => {
  let last = 0;
  let count = 0;
  let result = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === 1) count++;
    else {
      // ^ TODO: if (nums[i] === 0) doesn't work here... wtf
      if (last + count > result) {
        result = last + count;
      }
      last = count;
      count = 0;
    }
  }
  if (result === nums.length) result--;
  return result;
};

export default longestSubarray;
