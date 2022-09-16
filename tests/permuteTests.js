"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const permute_1 = __importDefault(require("../permutations/permute"));
describe("permute()", () => {
    it("Should given an array nums of distinct integers, return all the possible permutations", () => {
        assert_1.default.deepEqual((0, permute_1.default)([1, 2, 3]), [
            [1, 2, 3],
            [1, 3, 2],
            [2, 1, 3],
            [2, 3, 1],
            [3, 1, 2],
            [3, 2, 1],
        ]);
    });
    it("Should given an array nums of distinct integers, return all the possible permutations", () => {
        assert_1.default.deepEqual((0, permute_1.default)([0, 1]), [
            [0, 1],
            [1, 0],
        ]);
    });
    it("Should given an array with one number return one permutation", () => {
        assert_1.default.deepEqual((0, permute_1.default)([1]), [[1]]);
    });
});
