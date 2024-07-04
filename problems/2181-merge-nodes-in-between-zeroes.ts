export {}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val: number, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

function mergeNodes(head: ListNode): ListNode {
  let cur = head

  while (cur && cur.next) {
    let cur2 = cur.next
    let sum = 0
    while (cur2.val !== 0) {
      sum += cur2.val
      cur2 = cur2.next!
    }
    cur.val = sum
    cur.next = cur2.next ? cur2 : null
    cur = cur2
  }

  return head
}
