// https://leetcode.com/problems/power-of-two
const isPowerOfTwo = (n: number): boolean => {
  if (n === 1) return true;
  while (n > 1) {
    if (n === 2) return true;
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      return false;
    }
  }
  return false;
};

export default isPowerOfTwo;
