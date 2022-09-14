"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const orangesRotting_1 = __importDefault(require("../rotting-oranges/orangesRotting"));
const assert_1 = __importDefault(require("assert"));
describe("orangesRotting()", () => {
    it("Should return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1", () => {
        assert_1.default.equal((0, orangesRotting_1.default)([
            [2, 1, 1],
            [1, 1, 0],
            [0, 1, 1],
        ]), 4);
    });
    it("Should return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1", () => {
        assert_1.default.equal((0, orangesRotting_1.default)([
            [2, 1, 1],
            [0, 1, 1],
            [1, 0, 1],
        ]), -1);
    });
    it("Should return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1", () => {
        assert_1.default.equal((0, orangesRotting_1.default)([[0, 2]]), 0);
    });
});
