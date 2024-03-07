class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function middleNode(head: ListNode | null): ListNode | null {
  let p1 = head
  let p2 = head
  while (p2 && p2.next) {
    p1 = p1?.next ?? null
    p2 = p2?.next?.next ?? null
  }
  return p1
}

export {}
