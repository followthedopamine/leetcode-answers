import mergeTwoLists from "../merge-two-sorted-lists/mergeTwoLists";
import assert from "assert";
import ListNode from "../merge-two-sorted-lists/ListNode";

describe("mergeTwoLists()", () => {
  it("Should merge two lists into one sorted list", () => {
    const list1: ListNode = new ListNode(1, new ListNode(2, new ListNode(4)));
    const list2: ListNode = new ListNode(1, new ListNode(3, new ListNode(4)));
    const answer: ListNode = new ListNode(
      1,
      new ListNode(
        1,
        new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))
      )
    );
    assert.deepEqual(mergeTwoLists(list1, list2), answer);
  });
  it("Should merge two nulls", () => {
    const list1: ListNode | null = null;
    const list2: ListNode | null = null;
    const answer: ListNode | null = null;
    assert.deepEqual(mergeTwoLists(list1, list2), answer);
  });
});
