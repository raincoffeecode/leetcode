class _Node {
  val: number
  next: _Node | null
  constructor(val: number, next: _Node | null = null) {
    this.val = val
    this.next = next
  }
}

function insert(head: _Node | null, insertVal: number): _Node {
  const node = new _Node(insertVal)

  // Special case for empty list.
  if (!head) {
    node.next = node
    return node
  }

  let cur = head

  while (true) {
    const next = cur.next!
    const isEnd = cur.val > next.val || next === head

    const found =
      (isEnd && insertVal > cur.val) ||
      (isEnd && insertVal <= next.val) ||
      (!isEnd && insertVal > cur.val && insertVal <= next.val)

    if (found) {
      cur.next = node
      node.next = next
      break
    }

    cur = next
  }

  return head
}
