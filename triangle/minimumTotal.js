"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://leetcode.com/problems/triangle
const minimumTotal = (triangle) => {
    var _a, _b;
    for (let i = 1; i < triangle.length; i++) {
        const elementsLength = triangle[i].length;
        for (let j = 0; j < elementsLength; j++) {
            const leftValue = (_a = triangle[i - 1][j - 1]) !== null && _a !== void 0 ? _a : Infinity;
            const rightValue = (_b = triangle[i - 1][j]) !== null && _b !== void 0 ? _b : Infinity;
            triangle[i][j] += leftValue < rightValue ? leftValue : rightValue;
        }
    }
    return triangle[triangle.length - 1].reduce((acc, sum) => acc < sum ? acc : sum);
};
exports.default = minimumTotal;
