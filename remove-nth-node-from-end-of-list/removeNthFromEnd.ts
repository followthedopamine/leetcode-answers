// https://leetcode.com/problems/remove-nth-node-from-end-of-list

import ListNode from "./ListNode";

const removeNthFromEnd = (
  head: ListNode | null,
  n: number
): ListNode | null => {
  let slow: any = head;
  let fast: any = head;

  for (let i = 0; i < n; i++) {
    fast = fast.next;
  }

  if (!fast) {
    if (head !== undefined && head !== null) return head.next;
  }

  while (fast.next !== null) {
    slow = slow.next;
    fast = fast.next;
  }

  slow.next = slow.next.next;
  return head;
};

export default removeNthFromEnd;
