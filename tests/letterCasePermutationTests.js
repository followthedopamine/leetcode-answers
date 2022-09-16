"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const letterCasePermutation_1 = __importDefault(require("../letter-case-permutation/letterCasePermutation"));
describe("letterCasePermutation()", () => {
    it("Should return a list of all possible strings we could create", () => {
        assert_1.default.deepEqual((0, letterCasePermutation_1.default)("a1b2"), [
            "a1b2",
            "a1B2",
            "A1b2",
            "A1B2",
        ]);
    });
    it("Should return a list of all possible strings we could create", () => {
        assert_1.default.deepEqual((0, letterCasePermutation_1.default)("3z4"), ["3z4", "3Z4"]);
    });
});
