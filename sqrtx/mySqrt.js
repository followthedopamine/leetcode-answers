// https://leetcode.com/problems/sqrtx/submissions/
/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = (x) => {
  if (x < 2) return x;
  let left = 0;
  let right = Math.floor(x / 2);
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const stepMiddle = Math.floor(middle * middle);

    if (stepMiddle === x) return middle;
    if (stepMiddle < x) {
      left = middle + 1;
    }
    if (stepMiddle > x) {
      right = middle - 1;
    }
  }
  return left - 1;
};

console.log(mySqrt(0)); // 0
console.log(mySqrt(1)); // 1
console.log(mySqrt(4)); // 2
console.log(mySqrt(8)); // 2
console.log(mySqrt(9)); // 3
console.log(mySqrt(10)); // 3
console.log(mySqrt(16)); // 4
console.log(mySqrt(25)); // 5
console.log(mySqrt(26)); // 5
console.log(mySqrt(39)); // 6
console.log(mySqrt(1660267039)); // No idea just do it fast
console.log(mySqrt(2147395599)); // 46339

console.log(Math.sqrt(2147395599));
