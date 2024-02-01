interface Interval {
  start: number
  end: number
}

interface Entry {
  inorderInterval: Interval
  postorderInterval: Interval
  parentRight?: TreeNode
  parentLeft?: TreeNode
}

function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  let root: TreeNode | null = null

  const entries: Entry[] = [
    {
      inorderInterval: { start: 0, end: inorder.length },
      postorderInterval: { start: 0, end: postorder.length },
    },
  ]

  while (entries.length) {
    const { inorderInterval, postorderInterval, parentRight, parentLeft } =
      entries.shift()!

    if (postorderInterval.start >= postorderInterval.end) {
      continue
    }

    const val = postorder[postorderInterval.end - 1]
    const node = new TreeNode(val)

    if (!root) {
      root = node
    } else if (parentRight) {
      parentRight.left = node
    } else if (parentLeft) {
      parentLeft.right = node
    }

    let matchingIndex = -1
    for (let i = inorderInterval.start; i < inorderInterval.end; i++) {
      if (inorder[i] === val) {
        matchingIndex = i
        break
      }
    }

    const leftLength = matchingIndex - inorderInterval.start
    const rightLength = inorderInterval.end - 1 - matchingIndex

    if (leftLength > 0) {
      entries.push({
        inorderInterval: { start: inorderInterval.start, end: matchingIndex },
        postorderInterval: {
          start: postorderInterval.start,
          end: postorderInterval.start + leftLength,
        },
        parentRight: node,
      })
    }

    if (rightLength > 0) {
      entries.push({
        inorderInterval: { start: matchingIndex + 1, end: inorderInterval.end },
        postorderInterval: {
          start: postorderInterval.end - 1 - rightLength,
          end: postorderInterval.end - 1,
        },
        parentLeft: node,
      })
    }
  }

  return root
}
