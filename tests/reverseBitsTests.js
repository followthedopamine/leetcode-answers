"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const reverseBits_1 = __importDefault(require("../reverse-bits/reverseBits"));
describe("reverseBits()", () => {
    it("Should reverse bits of a given 32 bits unsigned integer.", () => {
        assert_1.default.equal((0, reverseBits_1.default)(11111111111111111111111111111101), 3221225471);
    });
});
