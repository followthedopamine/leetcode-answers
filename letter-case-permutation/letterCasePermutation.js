"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://leetcode.com/problems/letter-case-permutation/
const letterCasePermutation = (s) => {
    const result = [];
    const helper = (s, permutedArr, index) => {
        if (index === s.length) {
            result.push(permutedArr.join(""));
            return;
        }
        if (Number.isInteger(parseInt(s[index]))) {
            permutedArr.push(s[index]);
            helper(s, permutedArr, index + 1);
            permutedArr.pop();
        }
        else {
            permutedArr.push(s[index].toLowerCase());
            helper(s, permutedArr, index + 1);
            permutedArr.pop();
            permutedArr.push(s[index].toUpperCase());
            helper(s, permutedArr, index + 1);
            permutedArr.pop();
        }
    };
    helper(s, [], 0);
    return result;
};
exports.default = letterCasePermutation;
