"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const combine_1 = __importDefault(require("../combinations/combine"));
const assert_1 = __importDefault(require("assert"));
describe("combine()", () => {
    it("Should return all possible combinations of k numbers chosen from the range [1, n]", () => {
        assert_1.default.deepEqual((0, combine_1.default)(4, 2).sort(), [
            [1, 2],
            [1, 3],
            [1, 4],
            [2, 3],
            [2, 4],
            [3, 4],
        ].sort());
    });
    it("Should return all possible combinations of k numbers chosen from the range [1, n]", () => {
        assert_1.default.deepEqual((0, combine_1.default)(1, 1).sort(), [[1]].sort());
    });
});
