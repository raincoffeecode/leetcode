export {}

class ListNode {
  val: number
  next: ListNode | null

  constructor(val: number, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

function addTwoNumbers(l1: ListNode, l2: ListNode): ListNode {
  const head = new ListNode(0)
  let carry = 0
  let cur1: ListNode | null = l1
  let cur2: ListNode | null = l2
  let prev: ListNode | null = null

  while (cur1 || cur2 || carry > 0) {
    const v1 = cur1?.val ?? 0
    const v2 = cur2?.val ?? 0
    const sum = v1 + v2 + carry
    const val = sum % 10
    carry = Math.floor(sum / 10)

    if (prev === null) {
      head.val = val
      prev = head
    } else {
      const node = new ListNode(val)
      prev.next = node
      prev = node
    }

    cur1 = cur1?.next ?? null
    cur2 = cur2?.next ?? null
  }

  return head
}
