// https://leetcode.com/problems/reverse-bits
const reverseBits = (n: number): number => {
  let str = n.toString(2).split("");
  str.unshift(...new Array(32 - str.length).fill(0));
  return parseInt(str.reverse().join(""), 2);
};

export default reverseBits;
