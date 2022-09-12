class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  next: TreeNode | null;
  constructor(
    val?: number,
    left?: TreeNode,
    right?: TreeNode,
    next?: TreeNode
  ) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
  }
}

export default TreeNode;
