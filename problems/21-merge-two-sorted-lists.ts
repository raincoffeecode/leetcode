class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  let head: ListNode | null = null
  let c1 = list1
  let c2 = list2
  let c3: ListNode | null = null

  while (c1 || c2) {
    const c1LessThan = c1 && c2 && c1.val < c2.val
    const c2LessThanOrEqual = c1 && c2 && c2.val <= c1.val
    const c1Missing = !c1
    const c2Missing = !c2

    let next: ListNode

    if (c1LessThan || c2Missing) {
      next = c1!
      c1 = c1!.next
    } else if (c2LessThanOrEqual || c1Missing) {
      next = c2!
      c2 = c2!.next
    } else {
      // Should never reach this case but here as a safeguard.
      break
    }

    if (!c3) {
      head = next
    } else {
      c3.next = next
    }

    c3 = next
  }

  return head
}
