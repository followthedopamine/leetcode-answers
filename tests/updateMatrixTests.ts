import assert from "assert";
import updateMatrix from "../01-matrix/updateMatrix";

describe("updateMatrix()", () => {
  it("Should return the distance of the nearest 0 for each cell", () => {
    assert.deepEqual(
      updateMatrix([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ]),
      [
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ]
    );
  });
  it("Should return the distance of the nearest 0 for each cell", () => {
    assert.deepEqual(
      updateMatrix([
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1],
      ]),
      [
        [0, 0, 0],
        [0, 1, 0],
        [1, 2, 1],
      ]
    );
  });
});
