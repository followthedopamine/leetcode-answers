import assert from "assert";
import singleNumber from "../single-number/singleNumber";
describe("singleNumber()", () => {
  it("Should when given a non-empty array of integers nums, every element appears twice except for one. Find that single one.", () => {
    assert.equal(singleNumber([2, 2, 1]), 1);
  });
  it("Should when given a non-empty array of integers nums, every element appears twice except for one. Find that single one.", () => {
    assert.equal(singleNumber([4, 1, 2, 1, 2]), 4);
  });
  it("Should when given a non-empty array of integers nums, every element appears twice except for one. Find that single one.", () => {
    assert.equal(singleNumber([1]), 1);
  });
});
