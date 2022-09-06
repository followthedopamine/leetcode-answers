const firstBadVersion = require("../first-bad-version/firstBadVersion");
const assert = require("assert");

/*
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 */

function isBadVersion(totalVersions) {
  if (totalVersions === 5) {
    return (version) => {
      const versions = [false, false, false, true, true, true, true];
      return versions[version];
    };
  }
}

describe("firstBadVersion()", () => {
  it("Should return first bad version", () => {
    assert.equal(firstBadVersion(isBadVersion(5))(5), 4);
  });
});
