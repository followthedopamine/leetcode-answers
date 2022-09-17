// https://leetcode.com/problems/letter-case-permutation/
const letterCasePermutation = (s: string): string[] => {
  const result: string[] = [];
  const helper = (s: string, permutedArr: string[], index: number) => {
    if (index === s.length) {
      result.push(permutedArr.join(""));
      return;
    }

    if (Number.isInteger(parseInt(s[index]))) {
      permutedArr.push(s[index]);
      helper(s, permutedArr, index + 1);
      permutedArr.pop();
    } else {
      permutedArr.push(s[index].toLowerCase());
      helper(s, permutedArr, index + 1);
      permutedArr.pop();
      permutedArr.push(s[index].toUpperCase());
      helper(s, permutedArr, index + 1);
      permutedArr.pop();
    }
  };
  helper(s, [], 0);
  return result;
};

export default letterCasePermutation;
