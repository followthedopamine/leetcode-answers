"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const rob_1 = __importDefault(require("../house-robber/rob"));
describe("rob()", () => {
    it("Should return the maximum amount of money you can rob tonight without alerting the police.", () => {
        assert_1.default.equal((0, rob_1.default)([1, 2, 3, 1]), 4);
    });
    it("Should return the maximum amount of money you can rob tonight without alerting the police.", () => {
        assert_1.default.equal((0, rob_1.default)([2, 7, 9, 3, 1]), 12);
    });
});
