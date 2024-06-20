export {}

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(
    val: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val
    this.left = left
    this.right = right
  }
}

function lowestCommonAncestor(
  root: TreeNode,
  p: TreeNode,
  q: TreeNode
): TreeNode {
  const parentsTable = new Map<TreeNode, TreeNode | null>([[root, null]])
  const stack: TreeNode[] = [root]

  while (stack.length) {
    const node = stack.pop()!
    if (node.left) {
      parentsTable.set(node.left, node)
      stack.push(node.left)
    }
    if (node.right) {
      parentsTable.set(node.right, node)
      stack.push(node.right)
    }

    // Stop if we have reached both p and q nodes.
    if (parentsTable.has(p) && parentsTable.has(q)) {
      break
    }
  }

  const pAncestors = new Map<TreeNode, boolean>()
  let cur: TreeNode | null = p
  while (cur !== null) {
    pAncestors.set(cur, true)
    cur = parentsTable.get(cur) ?? null
  }

  cur = q
  while (cur !== null) {
    if (pAncestors.has(cur)) {
      return cur
    }
    cur = parentsTable.get(cur) ?? null
  }

  throw new Error("Invalid input.")
}
