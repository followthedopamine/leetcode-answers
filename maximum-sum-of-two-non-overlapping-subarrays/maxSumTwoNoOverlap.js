// https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays
// TODO: Understand wtf is going on here

/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
const maxSumTwoNoOverlap = (nums, firstLen, secondLen) => {
  const len = nums.length;
  for (let i = 1; i < len; i++) {
    nums[i] += nums[i - 1];
  }

  let lMax = nums[firstLen - 1];
  let mMax = nums[secondLen - 1];
  let res = nums[firstLen + secondLen - 1];
  for (let i = firstLen + secondLen; i < len; i++) {
    lMax = Math.max(lMax, nums[i - secondLen] - nums[i - secondLen - firstLen]);
    mMax = Math.max(mMax, nums[i - firstLen] - nums[i - secondLen - firstLen]);
    res = Math.max(
      res,
      lMax + nums[i] - nums[i - secondLen],
      mMax + nums[i] - nums[i - firstLen]
    );
  }
  return res;
};

console.log(maxSumTwoNoOverlap([0, 6, 5, 2, 2, 5, 1, 9, 4], 1, 2)); // 20
console.log(maxSumTwoNoOverlap([3, 8, 1, 3, 2, 1, 8, 9, 0], 3, 2)); // 29
console.log(maxSumTwoNoOverlap([2, 1, 5, 6, 0, 9, 5, 0, 3, 8], 4, 3)); // 31
console.log(maxSumTwoNoOverlap([4, 0, 1], 2, 1)); // 5
console.log(maxSumTwoNoOverlap([4, 5, 14, 16, 16, 20, 7, 13, 8, 15], 5, 3)); // 100
console.log(maxSumTwoNoOverlap([8, 20, 6, 2, 20, 17, 6, 3, 20, 8, 12], 5, 4)); // 108
