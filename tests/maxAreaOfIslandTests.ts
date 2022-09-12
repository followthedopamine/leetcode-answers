import assert from "assert";
import maxAreaOfIsland from "../max-area-of-island/maxAreaOfIsland";

describe("maxAreaOfIsland()", () => {
  it("Should return the maximum area of 4-directionally connected island in grid. If there is no island, return 0.", () => {
    const grid = [
      [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
    ];
    assert.equal(maxAreaOfIsland(grid), 6);
  });
  it("Should return the maximum area of 4-directionally connected island in grid. If there is no island, return 0.", () => {
    const grid = [[0, 0, 0, 0, 0, 0, 0, 0]];
    assert.equal(maxAreaOfIsland(grid), 0);
  });
});
