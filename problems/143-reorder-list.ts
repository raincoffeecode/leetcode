export {}

class ListNode {
  val: number
  next: ListNode | null

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null
  let cur = head
  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

function reorderList(head: ListNode | null): ListNode | null {
  let slow = head
  let fast = head
  while (fast?.next?.next) {
    slow = slow?.next ?? null
    fast = fast.next.next
  }
  let cur1 = head
  let cur2 = reverseList(slow?.next ?? null)
  if (slow) {
    slow.next = null
  }
  while (cur1 || cur2) {
    const cur1Next = cur1?.next ?? null
    const cur2Next = cur2?.next ?? null
    if (cur1) {
      cur1.next = cur2
    }
    if (cur2) {
      cur2.next = cur1Next
    }
    cur1 = cur1Next
    cur2 = cur2Next
  }
  return head
}
