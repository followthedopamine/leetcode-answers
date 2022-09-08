"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const twoSum_1 = __importDefault(require("../two-sum-ii-input-array-is-sorted/twoSum"));
const assert_1 = __importDefault(require("assert"));
describe("twoSum()", () => {
    it("Should find two numbers such that they add up to a specific target number", () => {
        assert_1.default.deepEqual((0, twoSum_1.default)([2, 7, 11, 15], 9), [1, 2]);
    });
    it("Should find two numbers such that they add up to a specific target number", () => {
        assert_1.default.deepEqual((0, twoSum_1.default)([2, 3, 4], 6), [1, 3]);
    });
    it("Should find two numbers such that they add up to a specific target number", () => {
        assert_1.default.deepEqual((0, twoSum_1.default)([-1, 0], -1), [1, 2]);
    });
});
