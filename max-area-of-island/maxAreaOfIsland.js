"use strict";
// https://leetcode.com/problems/max-area-of-island/
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
/*Runtime: 107 ms, faster than 84.32% of TypeScript online submissions for Max Area of Island.
Memory Usage: 46.1 MB, less than 57.63% of TypeScript online submissions for Max Area of Island.*/
class Island {
}
_a = Island;
Island.grid = [];
Island.getIslandSize = (r, c) => {
    const island = 1;
    if (r < 0 ||
        c < 0 ||
        r >= _a.grid.length ||
        c >= _a.grid[0].length ||
        _a.grid[r][c] !== island)
        return 0;
    _a.grid[r][c] = 0;
    return (1 +
        _a.getIslandSize(r + 1, c) +
        _a.getIslandSize(r - 1, c) +
        _a.getIslandSize(r, c + 1) +
        _a.getIslandSize(r, c - 1));
};
Island.maxAreaOfIsland = (grid) => {
    const island = 1;
    let maxIsland = 0;
    _a.grid = grid;
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[0].length; c++) {
            if (grid[r][c] === island) {
                maxIsland = Math.max(maxIsland, _a.getIslandSize(r, c));
            }
        }
    }
    return maxIsland;
};
const maxAreaOfIsland = Island.maxAreaOfIsland;
exports.default = maxAreaOfIsland;
