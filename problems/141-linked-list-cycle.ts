class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function hasCycle(head: ListNode | null): boolean {
  let p1 = head
  let p2 = head

  while (p2 !== null) {
    p1 = p1?.next ?? null
    p2 = p2?.next?.next ?? null

    if (p1 !== null && p1 === p2) {
      return true
    }
  }

  return false
}

export {}
