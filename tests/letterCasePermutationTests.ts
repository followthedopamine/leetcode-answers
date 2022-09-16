import assert from "assert";
import letterCasePermutation from "../letter-case-permutation/letterCasePermutation";

describe("letterCasePermutation()", () => {
  it("Should return a list of all possible strings we could create", () => {
    assert.deepEqual(letterCasePermutation("a1b2"), [
      "a1b2",
      "a1B2",
      "A1b2",
      "A1B2",
    ]);
  });
  it("Should return a list of all possible strings we could create", () => {
    assert.deepEqual(letterCasePermutation("3z4"), ["3z4", "3Z4"]);
  });
});
