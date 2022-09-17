// https://leetcode.com/problems/climbing-stairs

/* You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top? */

const climbStairs = (n: number): number => {
  if (n === 1) return 1;
  if (n === 2) return 2;
  let arr = [1, 2];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[arr.length - 1];
};

export default climbStairs;
