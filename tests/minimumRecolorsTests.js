"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const minimumRecolors_1 = __importDefault(require("../minimum-recolors-to-get-k-consecutive-black-blocks/minimumRecolors"));
describe("minimumRecolors()", () => {
    it("Should return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.", () => {
        assert_1.default.equal((0, minimumRecolors_1.default)("WBBWWBBWBW", 7), 3);
    });
    it("Should return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.", () => {
        assert_1.default.equal((0, minimumRecolors_1.default)("WBWBBBW", 2), 0);
    });
    it("Should return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.", () => {
        assert_1.default.equal((0, minimumRecolors_1.default)("BWWWBB", 6), 3);
    });
    it("Should return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.", () => {
        assert_1.default.equal((0, minimumRecolors_1.default)("WBWW", 2), 1);
    });
    it("Should return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.", () => {
        assert_1.default.equal((0, minimumRecolors_1.default)("BB", 1), 0);
    });
    it("Should return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.", () => {
        assert_1.default.equal((0, minimumRecolors_1.default)("W", 1), 1);
    });
    it("Should return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.", () => {
        assert_1.default.equal((0, minimumRecolors_1.default)("BWBBWWBBBWBWWWBWWBBWBWBBWBB", 11), 4);
    });
    it("Should return the minimum number of operations needed such that there is at least one occurrence of k consecutive black blocks.", () => {
        assert_1.default.equal((0, minimumRecolors_1.default)("BWWBWBBBWBBBWBBWWWBBBWBWBWBBBWWBWWWBWBBBWBBW", 27), 10);
    });
});
