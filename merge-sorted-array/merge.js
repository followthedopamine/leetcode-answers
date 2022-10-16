// https://leetcode.com/problems/merge-sorted-array/
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let pointer1 = m - 1;
  let pointer2 = n - 1;
  for (let i = nums1.length - 1; i >= 0; i--) {
    const p1 = nums1[pointer1] ?? -Infinity;
    const p2 = nums2[pointer2] ?? -Infinity;
    if (p1 >= p2) {
      nums1[i] = p1;
      pointer1--;
    }
    if (p1 < p2) {
      nums1[i] = p2;
      pointer2--;
    }
  }
  return nums1;
};

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)); // [1,2,2,3,5,6]
console.log(merge([1], 1, [], 0)); // [1]
console.log(merge([0], 0, [1], 1)); // [1] This is a weird one
console.log(merge([1, 2, 3, 0, 0, 0, 0], 3, [4, 5, 6, 7], 4));
console.log(merge([-1, 0, 0, 3, 3, 3, 0, 0, 0], 6, [1, 2, 2], 3)); // [-1,0,0,1,2,2,3,3,3]

// First instinct is to use two pointers, one for each array. The hard part is not erasing anything in the first array
// Obviously could just combine the two arrays, remove the zeroes and sort but that's defeating the purpose
// Maybe I could start from the back of each array and replace the largest numbers first
// That seems good, I just need to start my pointer for nums1 at nums1.length - m
// That didn't work at all lol
// The code is getting stuck when the pointer hits the end of one of the arrays
// Seems correct to me
// Negative numbers!!!
