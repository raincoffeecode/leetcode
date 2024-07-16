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

function createBinaryTree(descriptions: [number, number, number][]): TreeNode {
  const potentialRoots = new Map<number, TreeNode>()
  const childNodes = new Map<number, TreeNode>()

  function getParentNode(val: number): TreeNode {
    if (!potentialRoots.has(val) && !childNodes.has(val)) {
      const node = new TreeNode(val)
      potentialRoots.set(val, node)
      return node
    } else {
      return (potentialRoots.get(val) ?? childNodes.get(val))!
    }
  }

  function getChildNode(val: number): TreeNode {
    if (potentialRoots.has(val)) {
      const node = potentialRoots.get(val)!
      potentialRoots.delete(val)
      childNodes.set(val, node)
      return node
    } else if (childNodes.has(val)) {
      return childNodes.get(val)!
    } else {
      const node = new TreeNode(val)
      childNodes.set(val, node)
      return node
    }
  }

  for (const [parent, child, isLeft] of descriptions) {
    const parentNode = getParentNode(parent)
    const childNode = getChildNode(child)
    if (isLeft === 1) {
      parentNode.left = childNode
    } else {
      parentNode.right = childNode
    }
  }

  // Input is assumed to be valid, so there should be exactly 1 entry in map.
  const rootVal = potentialRoots.keys().next().value
  return potentialRoots.get(rootVal)!
}
