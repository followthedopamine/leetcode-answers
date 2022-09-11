// https://leetcode.com/problems/longest-substring-without-repeating-characters/

const lengthOfLongestSubstring = (s: string): number => {
  let longestSubstringLength = 0;
  const map = new Map();
  let windowStart = 0;

  // Loop through all letters in s
  for (let windowEnd = 0; windowEnd < s.length; windowEnd++) {
    // Set current letter
    let letter = s[windowEnd];

    // If the letter is already in map
    if (map.has(letter)) {
      // then the substring is over so we set a new window start. Either the current windowStart or the letter after the first instance of our current letter
      windowStart = Math.max(windowStart, map.get(letter) + 1);
    }
    // Add our current letter to the map with current index of the loop
    map.set(letter, windowEnd);

    // Calculate substring length
    const windowSize = windowEnd - windowStart + 1;
    // If substring is longer than previous longest then update longestSubstringLength
    longestSubstringLength = Math.max(longestSubstringLength, windowSize);
  }

  return longestSubstringLength;
};

export default lengthOfLongestSubstring;
