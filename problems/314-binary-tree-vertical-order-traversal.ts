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

function verticalOrder(root: TreeNode | null): number[][] {
  if (!root) {
    return []
  }

  const queue: [number, TreeNode][] = [[0, root]]
  const entries = new Map<number, number[]>()
  let minIndex = 0
  let maxIndex = 0

  while (queue.length) {
    const [index, node] = queue.shift()!

    // Update entry corresponding to index.
    if (entries.has(index)) {
      entries.get(index)!.push(node.val)
    } else {
      entries.set(index, [node.val])
    }

    // Push child nodes. Push left first so that it will get added first.
    if (node.left) {
      queue.push([index - 1, node.left])
      minIndex = Math.min(minIndex, index - 1)
    }
    if (node.right) {
      queue.push([index + 1, node.right])
      maxIndex = Math.max(maxIndex, index + 1)
    }
  }

  return Array.from(
    { length: maxIndex - minIndex + 1 },
    (_, i) => entries.get(minIndex + i)!
  )
}
