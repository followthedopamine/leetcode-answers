// https://leetcode.com/problems/longest-nice-substring/
// Time: 51:36.16
// One incorrect submit and this is definitely not the optimal solution

const isUpperCase = (char) => {
  if (char.charCodeAt(0) > 96) {
    return false;
  } else {
    return true;
  }
};

const isNice = (charArr) => {
  let check = null;
  for (let char of charArr) {
    if (isUpperCase(char)) {
      check = char.toLowerCase();
    } else {
      check = char.toUpperCase();
    }
    if (charArr.indexOf(check) === -1) {
      return false;
    }
  }
  return true;
};

/**
 * @param {string} s
 * @return {string}
 */
const longestNiceSubstring = (s) => {
  const sArr = s.split("");
  let temp = [];
  let longest = [];
  for (let i = 0; i <= sArr.length; i++) {
    for (let j = 0; j <= sArr.length; j++) {
      temp = sArr.slice(i, j);
      if (isNice(temp) && temp.length > longest.length) {
        longest = [...temp];
      }
    }
  }
  return longest.join("");
};

console.log(longestNiceSubstring("YazaAay")); // "aAa"
console.log(longestNiceSubstring("Bb")); // "Bb"
console.log(longestNiceSubstring("c")); // ""
console.log(longestNiceSubstring("jcJ"));
