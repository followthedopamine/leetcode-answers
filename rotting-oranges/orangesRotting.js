"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// https://leetcode.com/problems/rotting-oranges/
const orangesRotting = (grid) => {
    const rows = grid.length;
    const cols = grid[0].length;
    const getMoves = (i, j) => {
        return [
            [i + 1, j],
            [i - 1, j],
            [i, j + 1],
            [i, j - 1],
        ];
    };
    const isValid = (i, j) => {
        if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] !== 1)
            return false;
        grid[i][j] = 2;
        return true;
    };
    let freshOrangeCount = 0;
    let mins = 0;
    let queue = [];
    let temp = [];
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] == 1)
                freshOrangeCount += 1;
            else if (grid[i][j] == 2)
                queue.push([i, j]);
        }
    }
    while (queue.length > 0) {
        let rotten = queue.shift() || [0, 0]; // Weird typescript thing? It can't be undefined here
        for (let [newR, newC] of getMoves(rotten[0], rotten[1])) {
            if (isValid(newR, newC))
                temp.push([newR, newC]);
        }
        if (queue.length == 0 && temp.length > 0) {
            queue.push(...temp);
            freshOrangeCount -= temp.length;
            temp = [];
            mins += 1;
        }
    }
    return freshOrangeCount == 0 ? mins : -1;
};
exports.default = orangesRotting;
