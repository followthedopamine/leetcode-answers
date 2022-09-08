"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moveZeroes_1 = __importDefault(require("../move-zeroes/moveZeroes"));
const assert_1 = __importDefault(require("assert"));
describe("moveZeroes()", () => {
    it("Should move all 0's to the end of the array while maintaining the relative order of the non-zero elements.", () => {
        let nums = [0, 1, 0, 3, 12];
        (0, moveZeroes_1.default)(nums);
        assert_1.default.deepEqual(nums, [1, 3, 12, 0, 0]);
    });
    it("Should work with only one element in array", () => {
        let nums = [0];
        (0, moveZeroes_1.default)(nums);
        assert_1.default.deepEqual(nums, [0]);
    });
});
