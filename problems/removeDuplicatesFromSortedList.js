/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  if (!head || !head.next) {
    return head
  }

  let slow = head
  let fast = slow.next

  while (fast) {
    if (slow.val === fast.val) {
      fast = fast.next
      slow.next = fast
    } else {
      fast = fast.next
      slow = slow.next
    }
  }

  return head
}
