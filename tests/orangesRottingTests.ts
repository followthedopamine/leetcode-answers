import orangesRotting from "../rotting-oranges/orangesRotting";
import assert from "assert";

describe("orangesRotting()", () => {
  it("Should return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1", () => {
    assert.equal(
      orangesRotting([
        [2, 1, 1],
        [1, 1, 0],
        [0, 1, 1],
      ]),
      4
    );
  });
  it("Should return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1", () => {
    assert.equal(
      orangesRotting([
        [2, 1, 1],
        [0, 1, 1],
        [1, 0, 1],
      ]),
      -1
    );
  });
  it("Should return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1", () => {
    assert.equal(orangesRotting([[0, 2]]), 0);
  });
});
