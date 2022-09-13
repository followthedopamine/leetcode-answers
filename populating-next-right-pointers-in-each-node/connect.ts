/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// https://leetcode.com/problems/populating-next-right-pointers-in-each-node

import TreeNode from "./TreeNode";
function connect(root: TreeNode | null): TreeNode | null {
  if (root === null) return null;

  let current: TreeNode | undefined = root;
  let queue: TreeNode[] = [];

  queue.push(current);
  while (queue.length > 0) {
    let length: number = queue.length;
    for (let i = 0; i < length; i++) {
      current = queue.shift();
      if (current !== undefined) {
        if (length - i !== 1) {
          current.next = queue[0];
        } else {
          current.next = null;
        }
        if (current.left) {
          queue.push(current.left);
        }
        if (current.right) {
          queue.push(current.right);
        }
      }
    }
  }
  return root;
}

export default connect;
