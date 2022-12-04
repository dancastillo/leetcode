/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = function (l1, l2) {
  const newList = { val: -1, next: undefined };
  let llist = newList;

  while (l1 && l2) {
    if (l1.val > l2.val) {
      llist.next = l2;
      l2 = l2.next;
    } else {
      llist.next = l1;
      l1 = l1.next;
    }

    llist = llist.next;
  }

  llist.next = l1 || l2;

  return newList.next;
};
