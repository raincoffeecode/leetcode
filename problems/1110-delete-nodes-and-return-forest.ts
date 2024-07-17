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

function delNodes(root: TreeNode | null, toDelete: number[]): TreeNode[] {
  if (!root) {
    return []
  }

  const rootsMap = new Map<TreeNode, boolean>([[root, true]])
  const deleteMap = new Map(toDelete.map((n) => [n, true]))

  if (deleteMap.has(root.val)) {
    rootsMap.delete(root)
    if (root.left) {
      rootsMap.set(root.left, true)
    }
    if (root.right) {
      rootsMap.set(root.right, true)
    }
  }

  const nodes = root ? [root] : []

  while (nodes.length) {
    const node = nodes.shift()!

    if (node.left) {
      // Add to queue for processing.
      nodes.push(node.left)

      const deleteLeft = deleteMap.has(node.left.val)

      if (deleteLeft) {
        // Remove from roots map in case it was one.
        rootsMap.delete(node.left)

        // Add left as new root.
        if (node.left.left) {
          rootsMap.set(node.left.left, true)
        }

        // Add right as new root.
        if (node.left.right) {
          rootsMap.set(node.left.right, true)
        }

        node.left = null
      }
    }

    if (node.right) {
      // Add to queue for processing.
      nodes.push(node.right)

      const deleteRight = deleteMap.has(node.right.val)

      if (deleteRight) {
        // Remove from roots map in case it was one.
        rootsMap.delete(node.right)

        // Add left as new root.
        if (node.right.left) {
          rootsMap.set(node.right.left, true)
        }

        // Add right as new root.
        if (node.right.right) {
          rootsMap.set(node.right.right, true)
        }

        node.right = null
      }
    }
  }

  return [...rootsMap.keys()]
}

let n1 = new TreeNode(1)
let n2 = new TreeNode(2)
let n3 = new TreeNode(3)
let n4 = new TreeNode(4)

n1.left = n2
n1.right = n3
n3.right = n4

delNodes(n1, [2, 1])
