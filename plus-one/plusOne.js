// https://leetcode.com/problems/plus-one/
// Runtime: 57 ms, faster than 98.20% of JavaScript online submissions for Plus One.
/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = (digits) => {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] === 9) {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
        return digits;
      }
      continue;
    } else {
      digits[i] += 1;
      return digits;
    }
  }
};

console.log(plusOne([4, 3, 2, 1])); // [4,3,2,2]
console.log(plusOne([9])); // [1,0]
