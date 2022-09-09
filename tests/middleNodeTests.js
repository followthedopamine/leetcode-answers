"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const ListNode_1 = __importDefault(require("../middle-of-the-linked-list/ListNode"));
const middleNode_1 = __importDefault(require("../middle-of-the-linked-list/middleNode"));
describe("middleNode()", () => {
    it("Should return the middle node of the linked list.", () => {
        const head = new ListNode_1.default(1, new ListNode_1.default(2, new ListNode_1.default(3, new ListNode_1.default(4, new ListNode_1.default(5)))));
        const answer = new ListNode_1.default(3, new ListNode_1.default(4, new ListNode_1.default(5)));
        assert_1.default.deepEqual((0, middleNode_1.default)(head), answer);
    });
    it("Should return the second middle node of the linked list if there are two middle nodes.", () => {
        const head = new ListNode_1.default(1, new ListNode_1.default(2, new ListNode_1.default(3, new ListNode_1.default(4, new ListNode_1.default(5, new ListNode_1.default(6))))));
        const answer = new ListNode_1.default(4, new ListNode_1.default(5, new ListNode_1.default(6)));
        assert_1.default.deepEqual((0, middleNode_1.default)(head), answer);
    });
});
