const firstBadVersion = require("../first-bad-version/firstBadVersion");
const assert = require("assert");

/*
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 */

function isBadVersion(totalVersions) {
  if (totalVersions === 1) {
    return (version) => {
      const firstBadVersion = 1;
      return firstBadVersion <= version;
    };
  }
  if (totalVersions === 5) {
    return (version) => {
      const firstBadVersion = 4;
      return firstBadVersion <= version;
    };
  }
}

describe("firstBadVersion()", () => {
  it("Should return first bad version", () => {
    assert.equal(firstBadVersion(isBadVersion(5))(5), 4);
  });
  it("Should first bad version with only 1 element", () => {
    assert.equal(firstBadVersion(isBadVersion(1))(1), 1);
  });
});
