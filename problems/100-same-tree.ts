class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(
    val?: number,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val ?? 0
    this.left = left
    this.right = right
  }
}

// Recursive solution.
function isSameTreeRecursive(p: TreeNode | null, q: TreeNode | null) {
  if (!p && !q) {
    return true
  } else if (!q || !p) {
    return false
  } else {
    return (
      p.val === q.val &&
      isSameTree(p.left, q.left) &&
      isSameTree(p.right, q.right)
    )
  }
}

// Iterative solution.
function isSameTree(p: TreeNode | null, q: TreeNode | null) {
  const pStack = [p]
  const qStack = [q]

  while (pStack.length) {
    const n1 = pStack.pop()
    const n2 = qStack.pop()
    if (n1?.val !== n2?.val) {
      return false
    }
    if (n1) {
      pStack.push(n1.left)
      pStack.push(n1.right)
    }
    if (n2) {
      qStack.push(n2.left)
      qStack.push(n2.right)
    }
  }

  if (qStack.length) {
    return false
  }

  return true
}

export {}
