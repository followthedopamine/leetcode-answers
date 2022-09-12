"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const checkInclusion_1 = __importDefault(require("../permutation-in-string/checkInclusion"));
const assert_1 = __importDefault(require("assert"));
describe("checkInclusion()", () => {
    it("Should return true if s2 contains a permutation of s1", () => {
        const s1 = "ab";
        const s2 = "eidbaooo";
        assert_1.default.equal((0, checkInclusion_1.default)(s1, s2), true);
    });
    it("Should return false if s2 does not contain a permutation of s1", () => {
        const s1 = "ab";
        const s2 = "eidboaoo";
        assert_1.default.equal((0, checkInclusion_1.default)(s1, s2), false);
    });
    it("Should return true if s2 contains a permutation of s1", () => {
        const s1 = "abb";
        const s2 = "eidbabooo";
        assert_1.default.equal((0, checkInclusion_1.default)(s1, s2), true);
    });
    it("Should return true if s2 contains a permutation of s1 with an s1.length of 1", () => {
        const s1 = "a";
        const s2 = "ab";
        assert_1.default.equal((0, checkInclusion_1.default)(s1, s2), true);
    });
    it("Should return true if s2 contains a permutation of s1", () => {
        const s1 = "adc";
        const s2 = "dcda";
        assert_1.default.equal((0, checkInclusion_1.default)(s1, s2), true);
    });
});
