"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const hammingWeight_1 = __importDefault(require("../number-of-1-bits/hammingWeight"));
describe("hammingWeight()", () => {
    it("Should take an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).", () => {
        assert_1.default.equal((0, hammingWeight_1.default)(0o1011), 3);
    });
    it("Should take an unsigned integer and return the number of '1' bits it has (also known as the Hamming weight).", () => {
        assert_1.default.equal((0, hammingWeight_1.default)(0o10000000), 1);
    });
});
