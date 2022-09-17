"use strict";
// https://leetcode.com/problems/combinations/
/* Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

You may return the answer in any order.*/
Object.defineProperty(exports, "__esModule", { value: true });
const combine = (n, k) => {
    const result = [];
    const helper = (combined, offset) => {
        if (combined.length === k)
            return result.push([...combined]);
        for (let i = offset; i <= n; i++) {
            combined.push(i);
            helper(combined, i + 1);
            combined.pop();
        }
    };
    helper([], 1);
    return result;
};
exports.default = combine;
