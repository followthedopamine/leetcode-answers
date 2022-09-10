"use strict";
// https://leetcode.com/problems/middle-of-the-linked-list/
Object.defineProperty(exports, "__esModule", { value: true });
const middleNode = (head) => {
    var _a;
    let slow = head;
    let fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = (_a = fast === null || fast === void 0 ? void 0 : fast.next) === null || _a === void 0 ? void 0 : _a.next;
    }
    return slow;
};
exports.default = middleNode;
