export {}

class _Node {
  val: number
  left: _Node | null
  right: _Node | null
  parent: _Node | null

  constructor(
    val: number,
    left: _Node | null = null,
    right: _Node | null = null,
    parent: _Node | null = null
  ) {
    this.val = val
    this.left = left
    this.right = right
    this.parent = parent
  }
}

function lowestCommonAncestor(p: _Node, q: _Node): _Node {
  const pNodes = new Map<number, boolean>()
  let cur: _Node | null = null

  cur = p
  while (cur !== null) {
    pNodes.set(cur.val, true)
    cur = cur.parent
  }

  cur = q
  while (cur !== null) {
    if (pNodes.has(cur.val)) {
      return cur
    }
    cur = cur.parent
  }

  throw new Error("Invalid input.")
}
