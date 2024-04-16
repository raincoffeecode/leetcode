// Given the root of a binary tree and two integers val and depth, add a row of nodes
// with value val at the given depth depth.

// Note that the root node is at depth 1.

export {}

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(
    val: number = 0,
    left?: TreeNode | null,
    right?: TreeNode | null
  ) {
    this.val = val
    this.left = left ?? null
    this.right = right ?? null
  }
}

// Iterative solution.
function addOneRowIterative(
  root: TreeNode | null,
  val: number,
  depth: number
): TreeNode | null {
  if (depth === 1) {
    const node = new TreeNode(val, root)
    return node
  }

  let row: TreeNode[] = root ? [root] : []

  for (let i = 2; i < depth; i++) {
    const nextRow: TreeNode[] = []
    for (const node of row) {
      if (node.left) {
        nextRow.push(node.left)
      }
      if (node.right) {
        nextRow.push(node.right)
      }
    }
    row = nextRow
  }

  for (const node of row) {
    node.left = new TreeNode(val, node.left)
    node.right = new TreeNode(val, null, node.right)
  }

  return root
}

// Recursive solution.
function addOneRow(
  root: TreeNode | null,
  val: number,
  depth: number
): TreeNode | null {
  if (!root) {
    throw new Error("Invalid input.")
  }
  switch (depth) {
    case 1:
      const node = new TreeNode(val, root)
      return node
    case 2:
      root.left = new TreeNode(val, root.left)
      root.right = new TreeNode(val, null, root.right)
      break
    default:
      if (root.left) {
        addOneRow(root.left, val, depth - 1)
      }
      if (root.right) {
        addOneRow(root.right, val, depth - 1)
      }
      break
  }

  return root
}
