"use strict";
// https://leetcode.com/problems/remove-nth-node-from-end-of-list
Object.defineProperty(exports, "__esModule", { value: true });
const removeNthFromEnd = (head, n) => {
    let slow = head;
    let fast = head;
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }
    if (!fast) {
        if (head !== undefined && head !== null)
            return head.next;
    }
    while (fast.next !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return head;
};
exports.default = removeNthFromEnd;
