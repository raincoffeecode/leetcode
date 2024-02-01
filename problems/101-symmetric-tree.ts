function isSymmetric(root: TreeNode | null): boolean {
  let left = [root?.left ?? null]
  let right = [root?.right ?? null]
  let hasNextRow = !!(left[0] || right[0])

  while (hasNextRow) {
    const nextLeft = []
    const nextRight = []
    hasNextRow = false

    for (let i = 0; i < left.length; i++) {
      if (left[i]?.val !== right[i]?.val) {
        return false
      }

      nextLeft.push(...[left[i]?.left ?? null, left[i]?.right ?? null])
      nextRight.push(...[right[i]?.right ?? null, right[i]?.left ?? null])

      if (!hasNextRow) {
        hasNextRow = !!(
          left[i]?.left ||
          left[i]?.right ||
          right[i]?.right ||
          right[i]?.left
        )
      }
    }

    left = nextLeft
    right = nextRight
  }

  return true
}
