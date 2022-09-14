import assert from "assert";
import ListNode from "../reverse-linked-list/ListNode";
import reverseList from "../reverse-linked-list/reverseList";

describe("reverseList()", () => {
  it("Should given the head of a singly linked list, reverse the list, and return the reversed list.", () => {
    const head: ListNode = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4)))
    );
    const answer: ListNode = new ListNode(
      4,
      new ListNode(3, new ListNode(2, new ListNode(1)))
    );
    assert.deepEqual(reverseList(head), answer);
  });
  it("Should given the head of a singly linked list, reverse the list, and return the reversed list.", () => {
    const head: ListNode = new ListNode(1, new ListNode(2));
    const answer: ListNode = new ListNode(2, new ListNode(1));
    assert.deepEqual(reverseList(head), answer);
  });
});
