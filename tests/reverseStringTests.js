"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reverseString_1 = __importDefault(require("../reverse-string/reverseString"));
const assert_1 = __importDefault(require("assert"));
describe("reverseString()", () => {
    it("Should reverse an array of characters in place", () => {
        let s = ["h", "e", "l", "l", "o"];
        (0, reverseString_1.default)(s);
        assert_1.default.deepEqual(s, ["o", "l", "l", "e", "h"]);
    });
    it("Should reverse an array of characters in place maintaining capitalization", () => {
        let s = ["H", "a", "n", "n", "a", "h"];
        (0, reverseString_1.default)(s);
        assert_1.default.deepEqual(s, ["h", "a", "n", "n", "a", "H"]);
    });
});
