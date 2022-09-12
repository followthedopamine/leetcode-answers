// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters/
// TODO: Fix repeating code
const countGoodSubstrings = (s: string): number => {
  let map: any = {};
  let goodSubstrings = 0;
  const goodSubstringLength = 3;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    map[char] = (map[char] || 0) + 1;
    if (i === goodSubstringLength - 1) {
      if (!Object.values(map).some((value) => value !== 1 && value !== 0)) {
        goodSubstrings++;
      }
    }

    if (i >= goodSubstringLength) {
      const prevChar = s[i - goodSubstringLength];
      map[prevChar] = map[prevChar] - 1;
      if (!Object.values(map).some((value) => value !== 1 && value !== 0)) {
        goodSubstrings++;
      }
    }
  }
  return goodSubstrings;
};

export default countGoodSubstrings;
