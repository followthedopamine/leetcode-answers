const assert = require("assert");
const isPalindrome = require("../palindrome-number/isPalindrome");

describe("isPalindrome()", function () {
  it("Should return true when number reads the same from right to left as left to right", function () {
    assert.equal(isPalindrome(121), true);
  });
  it("Should return false when number reads differently from left to right as right to left", function () {
    assert.equal(isPalindrome(-121), false);
  });
  it("Should return false when number reads differently from left to right as right to left", function () {
    assert.equal(isPalindrome(10), false);
  });
});
