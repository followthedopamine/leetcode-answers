// https://leetcode.com/problems/middle-of-the-linked-list/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

import ListNode from "./ListNode";

const middleNode = (head: ListNode | null): ListNode | null => {
  let slow: any = head;
  let fast: any = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast?.next?.next;
  }
  return slow;
};

export default middleNode;
