"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const divisorSubstrings_1 = __importDefault(require("../find-the-k-beauty-of-a-number/divisorSubstrings"));
describe("divisorSubstrings()", () => {
    it("Should return the k-beauty of num.", () => {
        assert_1.default.equal((0, divisorSubstrings_1.default)(240, 2), 2);
    });
    it("Should return the k-beauty of num.", () => {
        assert_1.default.equal((0, divisorSubstrings_1.default)(430043, 2), 2);
    });
    it("Should return the k-beauty of num.", () => {
        assert_1.default.equal((0, divisorSubstrings_1.default)(10, 1), 1);
    });
});
