"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const maxAreaOfIsland_1 = __importDefault(require("../max-area-of-island/maxAreaOfIsland"));
describe("maxAreaOfIsland()", () => {
    it("Should return the maximum area of 4-directionally connected island in grid. If there is no island, return 0.", () => {
        const grid = [
            [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
            [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
        ];
        assert_1.default.equal((0, maxAreaOfIsland_1.default)(grid), 6);
    });
    it("Should return the maximum area of 4-directionally connected island in grid. If there is no island, return 0.", () => {
        const grid = [[0, 0, 0, 0, 0, 0, 0, 0]];
        assert_1.default.equal((0, maxAreaOfIsland_1.default)(grid), 0);
    });
});
