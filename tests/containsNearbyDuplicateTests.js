"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const containsNearbyDuplicate_1 = __importDefault(require("../contains-duplicate-ii/containsNearbyDuplicate"));
describe("containsNearbyDuplicate()", () => {
    it("Should return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k", () => {
        assert_1.default.equal((0, containsNearbyDuplicate_1.default)([1, 2, 3, 1], 3), true);
    });
    it("Should return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k", () => {
        assert_1.default.equal((0, containsNearbyDuplicate_1.default)([1, 0, 1, 1], 1), true);
    });
    it("Should return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k", () => {
        assert_1.default.equal((0, containsNearbyDuplicate_1.default)([1, 2, 3, 1, 2, 3], 2), true);
    });
});
