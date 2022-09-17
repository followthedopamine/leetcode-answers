"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const singleNumber_1 = __importDefault(require("../single-number/singleNumber"));
describe("singleNumber()", () => {
    it("Should when given a non-empty array of integers nums, every element appears twice except for one. Find that single one.", () => {
        assert_1.default.equal((0, singleNumber_1.default)([2, 2, 1]), 1);
    });
    it("Should when given a non-empty array of integers nums, every element appears twice except for one. Find that single one.", () => {
        assert_1.default.equal((0, singleNumber_1.default)([4, 1, 2, 1, 2]), 4);
    });
    it("Should when given a non-empty array of integers nums, every element appears twice except for one. Find that single one.", () => {
        assert_1.default.equal((0, singleNumber_1.default)([1]), 1);
    });
});
