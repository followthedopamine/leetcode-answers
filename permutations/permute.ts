// https://leetcode.com/problems/permutations
/* Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order. */
const permute = (nums: number[]): number[][] => {
  let results: number[][] = [];
  const size: number = nums.length;

  const backtrack = (tempList: number[]) => {
    if (tempList.length === size) return results.push(tempList);
    for (let i = 0; i < size; i++) {
      if (!tempList.includes(nums[i])) {
        tempList.push(nums[i]);
        backtrack(tempList.slice());
        tempList.pop();
      }
    }
  };
  backtrack([]);
  return results;
};

export default permute;
