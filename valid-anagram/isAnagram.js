// https://leetcode.com/problems/valid-anagram/
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
  const map = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    const sChar = s.charAt(i);
    const tChar = t.charAt(i);
    map[sChar] = map[sChar] !== undefined ? map[sChar] + 1 : 1;
    map[tChar] = map[tChar] !== undefined ? map[tChar] - 1 : -1;
  }

  const total = Object.values(map);
  for (let num of total) {
    if (num !== 0) return false;
  }
  return true;
};

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car")); // false
console.log(isAnagram("a", "b"));
