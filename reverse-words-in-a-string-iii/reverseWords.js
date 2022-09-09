"use strict";
// https://leetcode.com/problems/reverse-words-in-a-string-iii/
Object.defineProperty(exports, "__esModule", { value: true });
const reverseString = (str) => {
    let sArr = str.split("");
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        [sArr[left], sArr[right]] = [sArr[right], sArr[left]];
        left++;
        right--;
    }
    return sArr.join("");
};
// Not sure if it's a typescript thing but I couldn't get this to work modifying strArr in place with either map or a for of loop.
const reverseWords = (s) => {
    let strArr = s.split(" ");
    let result = [];
    for (let str of strArr) {
        result.push(reverseString(str));
    }
    return result.join(" ");
};
exports.default = reverseWords;
