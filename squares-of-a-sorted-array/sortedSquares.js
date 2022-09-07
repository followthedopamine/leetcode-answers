// https://leetcode.com/problems/squares-of-a-sorted-array/

// Follow up: Squaring each element and sorting the new array is very trivial, could you find an O(n) solution using a different approach?

// Initial thoughts: create array of all the negatives squared, then when we get to the positives create a new array and test if the number from the negative fits in;

// Square first and last number at same time and see which is bigger to add to array?

/**
 *
 * @param {number[]} nums
 * @returns {number[]}
 */

const sortedSquares = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  let result = [];
  while (left <= right) {
    let rSq = nums[right] ** 2;
    let lSq = nums[left] ** 2;
    if (lSq >= rSq) {
      left++;
      result.unshift(lSq);
    } else {
      right--;
      result.unshift(rSq);
    }
  }
  return result;
};

module.exports = sortedSquares;
