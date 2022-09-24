// https://leetcode.com/problems/linked-list-cycle/

const ListNode = require("./ListNode");

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  let fast = head;
  while (fast && fast.next) {
    head = head.next;
    fast = fast.next.next;
    if (head === fast) return true;
  }
  return false;
};
