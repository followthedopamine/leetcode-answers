"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mergeTwoLists_1 = __importDefault(require("../merge-two-sorted-lists/mergeTwoLists"));
const assert_1 = __importDefault(require("assert"));
const ListNode_1 = __importDefault(require("../merge-two-sorted-lists/ListNode"));
describe("mergeTwoLists()", () => {
    it("Should merge two lists into one sorted list", () => {
        const list1 = new ListNode_1.default(1, new ListNode_1.default(2, new ListNode_1.default(4)));
        const list2 = new ListNode_1.default(1, new ListNode_1.default(3, new ListNode_1.default(4)));
        const answer = new ListNode_1.default(1, new ListNode_1.default(1, new ListNode_1.default(2, new ListNode_1.default(3, new ListNode_1.default(4, new ListNode_1.default(4))))));
        assert_1.default.deepEqual((0, mergeTwoLists_1.default)(list1, list2), answer);
    });
    it("Should merge two nulls", () => {
        const list1 = null;
        const list2 = null;
        const answer = null;
        assert_1.default.deepEqual((0, mergeTwoLists_1.default)(list1, list2), answer);
    });
});
