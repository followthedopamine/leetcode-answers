import assert from "assert";
import containsNearbyDuplicate from "../contains-duplicate-ii/containsNearbyDuplicate";

describe("containsNearbyDuplicate()", () => {
  it("Should return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k", () => {
    assert.equal(containsNearbyDuplicate([1, 2, 3, 1], 3), true);
  });
  it("Should return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k", () => {
    assert.equal(containsNearbyDuplicate([1, 0, 1, 1], 1), true);
  });
  it("Should return false if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k", () => {
    assert.equal(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2), false);
  });
});
