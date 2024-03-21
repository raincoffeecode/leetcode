class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = val ?? 0
    this.next = next ?? null
  }
}

// Given the head of a singly linked list, reverse the list, and return the reversed
// list.
function reverseList(head: ListNode | null): ListNode | null {
  let cur: ListNode | null = head
  let prev: ListNode | null = null
  while (cur) {
    const next = cur.next
    cur.next = prev
    prev = cur
    cur = next
  }
  return prev
}

function reverseList1(head: ListNode | null): ListNode | null {
  if (!head) {
    return null
  }

  const nodes = [head]
  let cur = head

  // Walk the list and store nodes in a list.
  while (cur.next) {
    cur = cur.next
    nodes.push(cur)
  }

  // Keep reference of last node so we can return as new head.
  let newHead = cur

  // Pop off nodes from list and update references.
  while (nodes.length) {
    let next = nodes.pop()!
    cur.next = next
    cur = next
  }

  // Update the new tail to point to null.
  cur.next = null

  return newHead
}

export {}
