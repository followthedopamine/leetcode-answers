"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ListNode_1 = __importDefault(require("../remove-nth-node-from-end-of-list/ListNode"));
const removeNthFromEnd_1 = __importDefault(require("../remove-nth-node-from-end-of-list/removeNthFromEnd"));
const assert_1 = __importDefault(require("assert"));
describe("removeNthFromEnd()", () => {
    it("Should remove the nth node from the end of the list and return its head.", () => {
        const head = new ListNode_1.default(1, new ListNode_1.default(2, new ListNode_1.default(3, new ListNode_1.default(4, new ListNode_1.default(5)))));
        const answer = new ListNode_1.default(1, new ListNode_1.default(2, new ListNode_1.default(3, new ListNode_1.default(5))));
        assert_1.default.deepEqual((0, removeNthFromEnd_1.default)(head, 2), answer);
    });
    it("Should remove the nth node from the end of the list with only one element in list", () => {
        const head = new ListNode_1.default(1);
        const answer = new ListNode_1.default();
        assert_1.default.deepEqual((0, removeNthFromEnd_1.default)(head, 1), answer);
    });
    it("Should remove the nth node from the end of the list with only two elements in list", () => {
        const head = new ListNode_1.default(1, new ListNode_1.default(2));
        const answer = new ListNode_1.default(1);
        assert_1.default.deepEqual((0, removeNthFromEnd_1.default)(head, 1), answer);
    });
});
