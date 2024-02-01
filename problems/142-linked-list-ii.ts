/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function detectCycle(head: ListNode | null): ListNode | null {
  // Determine if there is a cycle or not. Use 2 cursors, 1 that moves by 1 and another
  // that moves by 2 for each iteration.
  let cursor1 = head
  let cursor2 = head
  while (true) {
    cursor1 = cursor1?.next ?? null
    cursor2 = cursor2?.next?.next ?? null
    if (!cursor1 || !cursor2) {
      return null
    }
    if (cursor1 === cursor2) {
      break
    }
  }

  // Determine cycle length by keeping 1 cursor stationary and moving the other.
  let length = 0
  cursor1 = cursor1.next
  while (cursor1 !== cursor2) {
    cursor1 = cursor1?.next ?? null
    length++
  }

  // Set up 2 cursors length apart. See when the farther one's next pointer is the first
  // one.
  cursor1 = head
  cursor2 = head
  for (let i = 0; i < length; i++) {
    cursor2 = cursor2?.next ?? null
  }
  while (cursor2?.next !== cursor1) {
    cursor1 = cursor1?.next ?? null
    cursor2 = cursor2?.next ?? null
  }

  return cursor1
}
