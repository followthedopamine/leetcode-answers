import assert from "assert";
import ListNode from "../middle-of-the-linked-list/ListNode";
import middleNode from "../middle-of-the-linked-list/middleNode";

describe("middleNode()", () => {
  it("Should return the middle node of the linked list.", () => {
    const head: ListNode = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    );
    const answer: ListNode = new ListNode(3, new ListNode(4, new ListNode(5)));
    assert.deepEqual(middleNode(head), answer);
  });
  it("Should return the second middle node of the linked list if there are two middle nodes.", () => {
    const head: ListNode = new ListNode(
      1,
      new ListNode(
        2,
        new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))
      )
    );
    const answer: ListNode = new ListNode(4, new ListNode(5, new ListNode(6)));
    assert.deepEqual(middleNode(head), answer);
  });
  it("Should return the only node if there is one node.", () => {
    const head: ListNode = new ListNode(1);
    const answer: ListNode = new ListNode(1);
    assert.deepEqual(middleNode(head), answer);
  });
});
