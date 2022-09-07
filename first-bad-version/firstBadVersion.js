// https://leetcode.com/problems/first-bad-version/

/*Runtime: 58 ms, faster than 96.98% of JavaScript online submissions for First Bad Version.
Memory Usage: 41.9 MB, less than 54.73% of JavaScript online submissions for First Bad Version.*/

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const firstBadVersion = (isBadVersion) => {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return (n) => {
    let left = 0;
    let middle = 0;
    let right = n;

    while (left < right) {
      middle = Math.floor((left + right) / 2);
      if (isBadVersion(middle)) {
        right = middle;
      } else {
        left = middle;
      }
      if (left + 1 === right || left === right) return right;
    }
  };
};

module.exports = firstBadVersion;
