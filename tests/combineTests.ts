import combine from "../combinations/combine";
import assert from "assert";

describe("combine()", () => {
  it("Should return all possible combinations of k numbers chosen from the range [1, n]", () => {
    assert.deepEqual(combine(4, 2), [
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4],
    ]);
  });
  it("Should return all possible combinations of k numbers chosen from the range [1, n]", () => {
    assert.deepEqual(combine(1, 1), [[1]]);
  });
});
