export {}

class _Node {
  val: number
  left: _Node | null
  right: _Node | null

  constructor(val?: number, left?: _Node | null, right?: _Node | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function treeToDoublyList(root: _Node | null): _Node | null {
  if (!root) {
    return null
  }

  let treeMin = root
  let treeMax = root

  function traverse(node: _Node): [_Node, _Node] {
    if (node.val < treeMin.val) {
      treeMin = node
    }
    if (node.val > treeMax.val) {
      treeMax = node
    }

    let minNode = node
    let maxNode = node

    if (node.left) {
      const [leftMin, leftMax] = traverse(node.left)
      leftMax.right = node
      node.left = leftMax
      minNode = leftMin
    }

    if (node.right) {
      const [rightMin, rightMax] = traverse(node.right)
      rightMin.left = node
      node.right = rightMin
      maxNode = rightMax
    }

    return [minNode, maxNode]
  }

  traverse(root)

  treeMin.left = treeMax
  treeMax.right = treeMin

  return treeMin
}
