const maxSumSubarray = (nums, len) => {
  let max = 0;
  let sum = 0;
  let finish = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (i >= len) {
      sum -= nums[i - len];
    }
    if (sum >= max) {
      max = sum;
      finish = i;
    }
  }
  return [max, finish];
};

/**
 * @param {number[]} nums
 * @param {number} firstLen
 * @param {number} secondLen
 * @return {number}
 */
const maxSumTwoNoOverlap = (nums, firstLen, secondLen) => {
  const helper = (nums, firstLen, secondLen) => {
    const newNums = [...nums];
    let [max, lastIndex] = maxSumSubarray(newNums, firstLen);
    const negativeArray = new Array(firstLen).fill(-2000);
    newNums.splice(lastIndex - firstLen + 1, firstLen, ...negativeArray);
    let [max2, lastIndex2] = maxSumSubarray(newNums, secondLen);
    console.log({ max }, { max2 });
    return max + max2;
  };
  return Math.max(
    helper(nums, firstLen, secondLen),
    helper(nums, secondLen, firstLen)
  );
};

console.log(maxSumTwoNoOverlap([0, 6, 5, 2, 2, 5, 1, 9, 4], 1, 2)); // 20
console.log(maxSumTwoNoOverlap([3, 8, 1, 3, 2, 1, 8, 9, 0], 3, 2)); // 29
console.log(maxSumTwoNoOverlap([2, 1, 5, 6, 0, 9, 5, 0, 3, 8], 4, 3)); // 31
console.log(maxSumTwoNoOverlap([4, 0, 1], 2, 1)); // 5
console.log(maxSumTwoNoOverlap([4, 5, 14, 16, 16, 20, 7, 13, 8, 15], 5, 3)); // 100
console.log(maxSumTwoNoOverlap([8, 20, 6, 2, 20, 17, 6, 3, 20, 8, 12], 5, 4)); // 108
