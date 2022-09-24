// https://leetcode.com/problems/linked-list-cycle/

const ListNode = require("./ListNode");

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {};

let qHead = new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(-4))));

console.log(hasCycle(qHead, 1)); // true
