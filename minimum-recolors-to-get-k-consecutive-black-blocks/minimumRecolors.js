"use strict";
// https://leetcode.com/problems/minimum-recolors-to-get-k-consecutive-black-blocks/
Object.defineProperty(exports, "__esModule", { value: true });
const minimumRecolors = (blocks, k) => {
    const blockArr = blocks.split("");
    let count = 0;
    let min = 0;
    for (let i = 0; i < blockArr.length; i++) {
        if (i < k && blockArr[i] === "W") {
            count++;
            min++;
        }
        else {
            if (blockArr[i] === "W")
                count++;
            if (blockArr[i - k] === "W")
                count--;
            if (count < min)
                min = count;
        }
    }
    return min;
};
exports.default = minimumRecolors;
