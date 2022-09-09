import ListNode from "../remove-nth-node-from-end-of-list/ListNode";
import removeNthFromEnd from "../remove-nth-node-from-end-of-list/removeNthFromEnd";
import assert from "assert";

describe("removeNthFromEnd()", () => {
    it("Should remove the nth node from the end of the list and return its head.", () => {
        const head: ListNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
        const answer: ListNode = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5))));
        assert.deepEqual(removeNthFromEnd(head, 2), answer);
    })
    it("Should remove the nth node from the end of the list with only one element in list", () => {
        const head: ListNode = new ListNode(1);
        const answer: ListNode = new ListNode();
        assert.deepEqual(removeNthFromEnd(head, 1), answer);
    })
    it("Should remove the nth node from the end of the list with only two elements in list", () => {
        const head: ListNode = new ListNode(1, new ListNode(2));
        const answer: ListNode = new ListNode(1);
        assert.deepEqual(removeNthFromEnd(head, 1), answer);
    })
})