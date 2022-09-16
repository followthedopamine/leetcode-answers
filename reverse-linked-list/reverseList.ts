// https://leetcode.com/problems/reverse-linked-list/

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

// TODO: Find solution with less space and not O(n2)
import ListNode from "./ListNode";
const reverseList = (head: ListNode | null): ListNode | null => {
  const arr = [];
  let newList = new ListNode(-1);
  const newListHead = newList;
  while (head) {
    arr.push(head.val);
    head = head.next;
  }
  arr.reverse();
  while (arr.length > 0) {
    newList.next = new ListNode(arr.shift());
    newList = newList.next;
  }
  return newListHead.next;
};

export default reverseList;
