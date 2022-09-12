import assert from "assert";
import floodFill from "../flood-fill/floodFill";

describe("floodFill()", () => {
  it("Should return the modified image after performing the flood fill.", () => {
    const problem = floodFill(
      [
        [1, 1, 1],
        [1, 1, 0],
        [1, 0, 1],
      ],
      1,
      1,
      2
    );
    const answer = [
      [2, 2, 2],
      [2, 2, 0],
      [2, 0, 1],
    ];
    assert.deepEqual(problem, answer);
  });
  it("Should return no changes when the starting pixel is already matching", () => {
    const problem = floodFill(
      [
        [0, 0, 0],
        [0, 0, 0],
      ],
      0,
      0,
      0
    );
    const answer = [
      [0, 0, 0],
      [0, 0, 0],
    ];
    assert.deepEqual(problem, answer);
  });
});
