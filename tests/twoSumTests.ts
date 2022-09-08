import twoSum from "../two-sum-ii-input-array-is-sorted/twoSum"
import assert from "assert"

describe("twoSum()", () => {
    it("Should find two numbers such that they add up to a specific target number", () => {
        assert.deepEqual(twoSum([2,7,11,15], 9), [1, 2])
    })
    it("Should find two numbers such that they add up to a specific target number", () => {
        assert.deepEqual(twoSum([2,3,4], 6), [1, 3])
    })
    it("Should find two numbers such that they add up to a specific target number", () => {
        assert.deepEqual(twoSum([-1,0], -1), [1, 2])
    })
})