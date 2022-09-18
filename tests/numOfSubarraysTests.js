"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const numOfSubarrays_1 = __importDefault(require("../number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/numOfSubarrays"));
describe("numOfSubArrays()", () => {
    it("Should given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.", () => {
        assert_1.default.equal((0, numOfSubarrays_1.default)([2, 2, 2, 2, 5, 5, 5, 8], 3, 4), 3);
    });
    it("Should given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.", () => {
        assert_1.default.equal((0, numOfSubarrays_1.default)([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5), 6);
    });
});
