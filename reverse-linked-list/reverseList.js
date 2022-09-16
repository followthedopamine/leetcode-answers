"use strict";
// https://leetcode.com/problems/reverse-linked-list/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const ListNode_1 = __importDefault(require("./ListNode"));
const reverseList = (head) => {
    const arr = [];
    let newList = new ListNode_1.default(-1);
    const newListHead = newList;
    while (head) {
        arr.push(head.val);
        head = head.next;
    }
    arr.reverse();
    while (arr.length > 0) {
        newList.next = new ListNode_1.default(arr.shift());
        newList = newList.next;
    }
    return newListHead.next;
};
exports.default = reverseList;
