/**
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = (nums) => {
  const table = {};
  let pairs = 0;
  for (let i = 0; i < nums.length; i++) {
    pairs += table[[nums[i]]] || 0;
    table[nums[i]] = table[nums[i]] + 1 || 1;
  }
  return pairs;
};

console.log(numIdenticalPairs([1, 2, 3, 1, 1, 3])); // 4
console.log(numIdenticalPairs([1, 1, 1, 1])); // 6 = 3 + 2 + 1
console.log(numIdenticalPairs([1, 1, 1, 1, 1])); // 10 = 4 + 3 + 2 + 1
console.log(numIdenticalPairs([1, 1, 1, 1, 1, 1])); // 15 = 5 + 4 + 3 + 2 + 1
console.log(numIdenticalPairs([1, 2, 3])); // 0
