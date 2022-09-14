"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const updateMatrix_1 = __importDefault(require("../01-matrix/updateMatrix"));
describe("updateMatrix()", () => {
    it("Should return the distance of the nearest 0 for each cell", () => {
        assert_1.default.deepEqual((0, updateMatrix_1.default)([
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0],
        ]), [
            [0, 0, 0],
            [0, 1, 0],
            [0, 0, 0],
        ]);
    });
    it("Should return the distance of the nearest 0 for each cell", () => {
        assert_1.default.deepEqual((0, updateMatrix_1.default)([
            [0, 0, 0],
            [0, 1, 0],
            [1, 1, 1],
        ]), [
            [0, 0, 0],
            [0, 1, 0],
            [1, 2, 1],
        ]);
    });
});
