"use strict";
// https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/
Object.defineProperty(exports, "__esModule", { value: true });
const numOfSubarrays = (arr, k, threshold) => {
    const getAverage = (nums) => {
        return nums.reduce((sum, num) => (sum += num)) / nums.length;
    };
    const temp = [];
    let count = 0;
    for (let i = 0; i < k; i++) {
        temp.push(arr[i]);
    }
    if (getAverage(temp) >= threshold) {
        count++;
    }
    for (let i = k; i < arr.length; i++) {
        temp.push(arr[i]);
        temp.shift();
        if (getAverage(temp) >= threshold) {
            count++;
        }
    }
    return count;
};
exports.default = numOfSubarrays;
