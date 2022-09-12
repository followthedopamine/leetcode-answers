// https://leetcode.com/problems/max-area-of-island/

/*Runtime: 107 ms, faster than 84.32% of TypeScript online submissions for Max Area of Island.
Memory Usage: 46.1 MB, less than 57.63% of TypeScript online submissions for Max Area of Island.*/

class Island {
  private static grid: number[][] = [];

  private static getIslandSize = (r: number, c: number): number => {
    const island = 1;
    if (
      r < 0 ||
      c < 0 ||
      r >= this.grid.length ||
      c >= this.grid[0].length ||
      this.grid[r][c] !== island
    )
      return 0;

    this.grid[r][c] = 0;

    return (
      1 +
      this.getIslandSize(r + 1, c) +
      this.getIslandSize(r - 1, c) +
      this.getIslandSize(r, c + 1) +
      this.getIslandSize(r, c - 1)
    );
  };

  public static maxAreaOfIsland = (grid: number[][]): number => {
    const island = 1;
    let maxIsland = 0;
    this.grid = grid;
    for (let r = 0; r < grid.length; r++) {
      for (let c = 0; c < grid[0].length; c++) {
        if (grid[r][c] === island) {
          maxIsland = Math.max(maxIsland, this.getIslandSize(r, c));
        }
      }
    }
    return maxIsland;
  };
}
const maxAreaOfIsland = Island.maxAreaOfIsland;
export default maxAreaOfIsland;
