"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const climbStairs_1 = __importDefault(require("../climbing-stairs/climbStairs"));
describe("climbStairs()", () => {
    it("Should return the number of distinct ways you can climb to the top", () => {
        assert_1.default.equal((0, climbStairs_1.default)(2), 2);
    });
    it("Should return the number of distinct ways you can climb to the top", () => {
        assert_1.default.equal((0, climbStairs_1.default)(3), 3);
    });
});
