"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const countGoodSubstrings_1 = __importDefault(require("../substrings-of-size-three-with-distinct-characters/countGoodSubstrings"));
const assert_1 = __importDefault(require("assert"));
describe("countGoodSubstrings()", () => {
    it("Should return the number of substrings with no repeating characters of length three in s", () => {
        assert_1.default.equal((0, countGoodSubstrings_1.default)("xyzzaz"), 1);
    });
    it("Should return the number of substrings with no repeating characters of length three in s", () => {
        assert_1.default.equal((0, countGoodSubstrings_1.default)("aababcabc"), 4);
    });
});
