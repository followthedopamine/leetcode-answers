"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const floodFill_1 = __importDefault(require("../flood-fill/floodFill"));
describe("floodFill()", () => {
    it("Should return the modified image after performing the flood fill.", () => {
        const problem = (0, floodFill_1.default)([
            [1, 1, 1],
            [1, 1, 0],
            [1, 0, 1],
        ], 1, 1, 2);
        const answer = [
            [2, 2, 2],
            [2, 2, 0],
            [2, 0, 1],
        ];
        assert_1.default.deepEqual(problem, answer);
    });
    it("Should return no changes when the starting pixel is already matching", () => {
        const problem = (0, floodFill_1.default)([
            [0, 0, 0],
            [0, 0, 0],
        ], 0, 0, 0);
        const answer = [
            [0, 0, 0],
            [0, 0, 0],
        ];
        assert_1.default.deepEqual(problem, answer);
    });
});
