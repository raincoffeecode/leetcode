class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeInBetween(
  list1: ListNode | null,
  a: number,
  b: number,
  list2: ListNode | null
): ListNode | null {
  if (!list1 || !list2) {
    throw new Error("Invalid input.")
  }

  // Determine nodes A, B, C, D.

  // B: Head of list2.
  const nodeB = list2

  // A: Node prior to the 1st one being removed from list1.
  let cur: ListNode = list1
  for (let i = 1; i < a; i++) {
    cur = cur.next!
  }
  const nodeA = cur

  // D: The node after the last node being removed in list1.
  cur = cur.next!
  for (let i = a; i < b; i++) {
    cur = cur.next!
  }
  const nodeD = cur.next

  // C: Tail of list2.
  cur = list2
  while (cur.next) {
    cur = cur.next
  }
  const nodeC = cur

  nodeA.next = nodeB
  nodeC.next = nodeD

  return list1
}

export {}
