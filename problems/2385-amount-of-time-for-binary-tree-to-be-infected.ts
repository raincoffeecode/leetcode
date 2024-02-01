;(function () {
  let maxDistance = 0

  function amountOfTime(root: TreeNode | null, start: number): number {
    traverse(root, start)
    return maxDistance
  }

  function traverse(node: TreeNode | null, start: number): number {
    if (!node) {
      return 0
    }

    const leftDepth = traverse(node.left, start)
    const rightDepth = traverse(node.right, start)

    const isStart = node.val === start
    const isAncestorOfStart = leftDepth <= -1 || rightDepth <= -1

    if (isStart) {
      maxDistance = Math.max(leftDepth, rightDepth)
      return -1
    } else if (isAncestorOfStart) {
      const distance = Math.abs(leftDepth) + Math.abs(rightDepth)
      maxDistance = Math.max(maxDistance, distance)
      return Math.min(leftDepth, rightDepth) - 1
    } else {
      return Math.max(leftDepth, rightDepth) + 1
    }
  }
})()
