// https://leetcode.com/problems/single-number/
const singleNumber = (nums: number[]): number => {
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
};

export default singleNumber;
