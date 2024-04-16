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

function sumOfLeftLeaves(root: TreeNode | null): number {
  if (!root) {
    throw new Error("Invalid input.")
  }

  let sum = 0
  const stack = [root]

  while (stack.length) {
    const node = stack.pop()!
    if (node.left && !node.left.left && !node.left.right) {
      sum += node.left.val
    }
    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
  }

  return sum
}
