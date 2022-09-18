// https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/

const numOfSubarrays = (
  arr: number[],
  k: number,
  threshold: number
): number => {
  const getAverage = (nums: number[]) => {
    return nums.reduce((sum, num) => (sum += num)) / nums.length;
  };
  const temp = [];
  let count = 0;
  for (let i = 0; i < k; i++) {
    temp.push(arr[i]);
  }
  if (getAverage(temp) >= threshold) {
    count++;
  }
  for (let i = k; i < arr.length; i++) {
    temp.push(arr[i]);
    temp.shift();
    if (getAverage(temp) >= threshold) {
      count++;
    }
  }
  return count;
};
export default numOfSubarrays;
