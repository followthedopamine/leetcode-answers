"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
function connect(root) {
    if (root === null)
        return null;
    let current = root;
    let queue = [];
    queue.push(current);
    while (queue.length > 0) {
        let length = queue.length;
        for (let i = 0; i < length; i++) {
            current = queue.shift();
            if (current !== undefined) {
                if (length - i !== 1) {
                    current.next = queue[0];
                }
                else {
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
exports.default = connect;
