export {}

class ListNode {
  val: number
  next: ListNode | null
  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

function doubleIt(head: ListNode | null): ListNode | null {
  const stack: ListNode[] = []
  let cur = head
  while (cur) {
    stack.push(cur)
    cur = cur.next
  }

  let carry = 0
  while (stack.length) {
    cur = stack.pop()!
    const val = cur.val * 2 + carry
    cur.val = val % 10
    carry = Math.floor(val / 10)
  }

  return carry === 0 ? cur : new ListNode(carry, cur)
}

const n3 = new ListNode(9)
const n2 = new ListNode(8, n3)
const n1 = new ListNode(1, n2)

doubleIt(n1)
