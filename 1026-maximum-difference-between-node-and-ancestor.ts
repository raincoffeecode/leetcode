function maxAncestorDiff(
  node: TreeNode | null,
  min?: number,
  max?: number
): number {
  if (!node) {
    return 0
  }

  const diffs: number[] =
    min !== undefined && max !== undefined
      ? [Math.abs(min - node.val), Math.abs(max - node.val)]
      : []

  min = min === undefined ? node.val : Math.min(min, node.val)
  max = max === undefined ? node.val : Math.max(max, node.val)

  diffs.push(
    maxAncestorDiff(node.left, min, max),
    maxAncestorDiff(node.right, min, max)
  )

  return Math.max(...diffs)
}
