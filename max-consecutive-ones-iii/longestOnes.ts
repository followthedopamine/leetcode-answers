// https://leetcode.com/problems/max-consecutive-ones-iii/
/* Runtime: 82 ms, faster than 97.14% of TypeScript online submissions for Max Consecutive Ones III.
Memory Usage: 47.9 MB, less than 57.14% of TypeScript online submissions for Max Consecutive Ones III. */
const longestOnes = (nums: number[], k: number): number => {
  let count = 0;
  let windowStart = 0;
  let maxSubstring = 0;
  for (let windowEnd = 0; windowEnd < nums.length; windowEnd++) {
    if (nums[windowEnd] === 1) count++;

    const windowSize = windowEnd - windowStart + 1;
    if (windowSize - count > k) {
      if (nums[windowStart] === 1) count--;
      windowStart++;
    }
    maxSubstring = Math.max(maxSubstring, windowEnd - windowStart + 1);
  }
  return maxSubstring;
};

export default longestOnes;
