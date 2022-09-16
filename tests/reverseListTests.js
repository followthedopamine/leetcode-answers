"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const ListNode_1 = __importDefault(require("../reverse-linked-list/ListNode"));
const reverseList_1 = __importDefault(require("../reverse-linked-list/reverseList"));
describe("reverseList()", () => {
    it("Should given the head of a singly linked list, reverse the list, and return the reversed list.", () => {
        const head = new ListNode_1.default(1, new ListNode_1.default(2, new ListNode_1.default(3, new ListNode_1.default(4))));
        const answer = new ListNode_1.default(4, new ListNode_1.default(3, new ListNode_1.default(2, new ListNode_1.default(1))));
        assert_1.default.deepEqual((0, reverseList_1.default)(head), answer);
    });
    it("Should given the head of a singly linked list, reverse the list, and return the reversed list.", () => {
        const head = new ListNode_1.default(1, new ListNode_1.default(2));
        const answer = new ListNode_1.default(2, new ListNode_1.default(1));
        assert_1.default.deepEqual((0, reverseList_1.default)(head), answer);
    });
});
