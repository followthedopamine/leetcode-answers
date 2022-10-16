// https://leetcode.com/problems/valid-parentheses/

/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
  const counts = new Array(3).fill(0);
  const opens = new Array(3).fill(false);
  const open = ["(", "[", "{"];
  const close = [")", "]", "}"];

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    const pos =
      open.indexOf(char) !== -1 ? open.indexOf(char) : close.indexOf(char);
    const isOpen = open.indexOf(char) !== -1 ? true : false;
    const opensTemp = [...opens].splice(pos, 1);
    const canClose = opensTemp.indexOf(true) === -1 ? true : false;
    if (isOpen) {
      opens[pos] = true;
      counts[pos] += 1;
    } else {
      if (!canClose) return false;
      if (counts[pos] === 0) return false;
      opens[pos] = false;
      counts[pos] -= 1;
    }
  }
  return counts[0] + counts[1] + counts[2] === 0;
};

console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("(]")); // false
console.log(isValid("([]){()}")); // true
console.log(isValid("([)]")); // false not sure if I can make my solution work here
