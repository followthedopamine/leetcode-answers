// https://leetcode.com/problems/permutation-in-string

// Return true if s2 contains a permutation of s1
// TODO: Fix code to repeat less

const checkInclusion = (s1: string, s2: string): boolean => {
  // Create hash map
  const map: any = {};

  // Sliding window of s1.length subtracting new letter and adding old letter
  if (s1.length > s2.length) return false;
  for (let i = 0; i < s1.length; i++) {
    const char = s1[i];
    const char2 = s2[i];
    if (map[char]) {
      map[char] += 1;
    } else {
      map[char] = 1;
    }
    if (map[char2]) {
      map[char2] -= 1;
    } else {
      map[char2] = -1;
    }
  }

  // If all keys = 0 in hash map then substring = found
  if (!Object.values(map).some((value) => value !== 0)) {
    return true;
  }

  for (let i = s1.length; i < s2.length; i++) {
    const char2 = s2[i];
    const oldChar = s2[i - s1.length];
    if (map[char2]) {
      map[char2] -= 1;
    } else {
      map[char2] = -1;
    }
    map[oldChar] += 1;
    // If all keys = 0 in hash map then substring = found
    if (!Object.values(map).some((value) => value !== 0)) {
      return true;
    }
  }

  return false;
};

export default checkInclusion;
