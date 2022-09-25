/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) => {
  // Initial thoughts: do i need to sort by length first? Probably not

  let result = "";
  for (let i = 0; i < strs[0].length; i++) {
    const char = strs[0].charAt(i);
    for (let j = 0; j < strs.length; j++) {
      let char2 = strs[j].charAt(i);
      if (char !== char2) return result;
    }
    result += char;
  }
  return result;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"])); // ""
