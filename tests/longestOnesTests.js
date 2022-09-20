"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const longestOnes_1 = __importDefault(require("../max-consecutive-ones-iii/longestOnes"));
describe("longestOnes()", () => {
    it("Should return the maximum number of consecutive 1's in the array if you can flip at most k 0's.", () => {
        assert_1.default.equal((0, longestOnes_1.default)([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2), 6);
    });
    it("Should return the maximum number of consecutive 1's in the array if you can flip at most k 0's.", () => {
        assert_1.default.equal((0, longestOnes_1.default)([0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1], 3), 10);
    });
});
