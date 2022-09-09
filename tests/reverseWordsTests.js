"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reverseWords_1 = __importDefault(require("../reverse-words-in-a-string-iii/reverseWords"));
const assert_1 = __importDefault(require("assert"));
describe("reverseWords()", () => {
    it("Should reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.", () => {
        assert_1.default.equal((0, reverseWords_1.default)("Let's take LeetCode contest"), "s'teL ekat edoCteeL tsetnoc");
    });
    it("Should reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.", () => {
        assert_1.default.equal((0, reverseWords_1.default)("God Ding"), "doG gniD");
    });
});
