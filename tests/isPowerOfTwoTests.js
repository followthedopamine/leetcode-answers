"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const isPowerOfTwo_1 = __importDefault(require("../power-of-two/isPowerOfTwo"));
describe("isPowerOfTwo()", () => {
    it("Should return true if n is a power of two", () => {
        assert_1.default.equal((0, isPowerOfTwo_1.default)(1), true);
    });
    it("Should return true if n is a power of two", () => {
        assert_1.default.equal((0, isPowerOfTwo_1.default)(16), true);
    });
    it("Should return true if n is a power of two", () => {
        assert_1.default.equal((0, isPowerOfTwo_1.default)(3), false);
    });
});
