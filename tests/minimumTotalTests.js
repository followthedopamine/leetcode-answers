"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const minimumTotal_1 = __importDefault(require("../triangle/minimumTotal"));
describe("minimumTotal()", () => {
    it("Should return the minimum path sum from top to bottom.", () => {
        assert_1.default.equal((0, minimumTotal_1.default)([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]), 11);
    });
    it("Should work with only one path", () => {
        assert_1.default.equal((0, minimumTotal_1.default)([[-10]]), -10);
    });
});
