// https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = function (x) {
  const splitDigits = x.toString().split("");
  let left = 0;
  let right = splitDigits.length - 1;
  while (left <= right) {
    if (splitDigits[left] !== splitDigits[right]) return false;
    left++;
    right--;
  }
  return true;
};

module.exports = isPalindrome;
