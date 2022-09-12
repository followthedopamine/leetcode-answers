// https://leetcode.com/problems/contains-duplicate-ii/

const containsNearbyDuplicate = (nums: number[], k: number): boolean => {
  let map: any = {};
  for (let i = 0; i < nums.length; i++) {
    if (i - map[nums[i]] <= k) {
      return true;
    }
    map[nums[i]] = i;
  }
  return false;
};

export default containsNearbyDuplicate;
