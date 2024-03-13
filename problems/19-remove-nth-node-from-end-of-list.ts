class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let p0: ListNode | null = null
  let p1 = head
  let p2 = head

  // Set up `p2` to be n offset from `p1`.
  for (let i = 1; i <= n; i++) {
    p2 = p2?.next ?? null
  }

  // Traverse until `p2` reaches the end. `p0` is the previous node from `p1`.
  while (p2) {
    p0 = p1
    p1 = p1?.next ?? null
    p2 = p2?.next ?? null
  }

  if (p1 === head) {
    return p1?.next ?? null
  } else if (p0) {
    p0.next = p0.next?.next ?? null
    return head
  } else {
    return null
  }
}

export {}
