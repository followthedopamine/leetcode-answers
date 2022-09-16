"use strict";
// https://leetcode.com/problems/merge-two-sorted-lists
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
const ListNode_1 = __importDefault(require("./ListNode"));
const mergeTwoLists = (list1, list2) => {
    let newList = new ListNode_1.default(-1);
    const newListHead = newList;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            newList.next = list1;
            list1 = list1.next;
        }
        else {
            newList.next = list2;
            list2 = list2.next;
        }
        newList = newList.next;
    }
    newList.next = list1 || list2;
    return newListHead.next;
};
exports.default = mergeTwoLists;
