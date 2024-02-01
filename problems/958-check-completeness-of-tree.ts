function isCompleteTree(root: TreeNode | null): boolean {
  const { isComplete } = isCompleteTreeRecursive(root)
  return isComplete
}

function isCompleteTreeRecursive(node: TreeNode | null): {
  isComplete: boolean
  minDepth: number
  maxDepth: number
} {
  if (!node) {
    return { isComplete: true, minDepth: 0, maxDepth: 0 }
  }
  const left = isCompleteTreeRecursive(node.left)
  const right = isCompleteTreeRecursive(node.right)
  const minDepth = 1 + Math.min(left.minDepth, right.minDepth)
  const maxDepth = 1 + Math.max(left.maxDepth, right.maxDepth)

  const isValidDiff = [
    left.maxDepth - right.maxDepth,
    left.minDepth - right.minDepth,
    left.maxDepth - right.minDepth,
    left.minDepth - right.maxDepth,
  ].every((diff) => diff === 1 || diff === 0)

  return {
    isComplete: left.isComplete && right.isComplete && isValidDiff,
    minDepth,
    maxDepth,
  }
}
