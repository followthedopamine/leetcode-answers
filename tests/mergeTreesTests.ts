import TreeNode from "../merge-two-binary-tress/TreeNode";
import mergeTrees from "../merge-two-binary-tress/mergeTrees";
import assert from "assert";

// Hopefully solving is less difficult than writing the tests

describe("mergeTrees()", () => {
  it("Should return the merged tree.", () => {
    const problemRoot1 = new TreeNode(
      1,
      new TreeNode(3, new TreeNode(5)),
      new TreeNode(2)
    );
    const problemRoot2 = new TreeNode(
      2,
      new TreeNode(1, null, new TreeNode(4)),
      new TreeNode(3, null, new TreeNode(7))
    );
    const answer = new TreeNode(
      3,
      new TreeNode(4, new TreeNode(5), new TreeNode(4)),
      new TreeNode(5, null, new TreeNode(7))
    );
    assert.deepEqual(mergeTrees(problemRoot1, problemRoot2), answer);
  });
  it("Should return the merged tree.", () => {
    const problemRoot1 = new TreeNode(1);
    const problemRoot2 = new TreeNode(1, new TreeNode(2));
    const answer = new TreeNode(2, new TreeNode(2));
    assert.deepEqual(mergeTrees(problemRoot1, problemRoot2), answer);
  });
});
