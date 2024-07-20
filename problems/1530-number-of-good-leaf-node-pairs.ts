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

function countPairs(root: TreeNode, distance: number): number {
  let count = 0

  function traverse(node: TreeNode | null): number[] {
    const counts = Array(distance + 1).fill(0)

    if (!node) {
      return counts
    }

    const isLeaf = node.left === null && node.right === null

    if (isLeaf) {
      counts[1] = 1
    } else {
      const left = traverse(node.left)
      const right = traverse(node.right)

      for (let i = 1; i <= distance; i++) {
        for (let j = 1; i + j <= distance; j++) {
          if (left[i] > 0 && right[j] > 0) {
            count += left[i] * right[j]
          }
        }
      }

      for (let i = 1; i <= distance; i++) {
        counts[i] = left[i - 1] + right[i - 1]
      }
    }

    return counts
  }

  traverse(root)
  return count
}

// let n1 = new TreeNode(1)
// let n2 = new TreeNode(2)
// let n3 = new TreeNode(3)
// let n4 = new TreeNode(4)
// n1.left = n2
// n1.right = n3
// n2.right = n4

const nodes = [78, 15, 81, 73, 98, 36, 30, 63, 32].map(
  (val) => new TreeNode(val)
)
nodes[0].left = nodes[1]
nodes[0].right = nodes[2]
nodes[1].left = nodes[3]
nodes[1].right = nodes[4]
nodes[2].left = nodes[5]
nodes[3].left = nodes[6]
nodes[4].left = nodes[7]
nodes[4].right = nodes[8]

const count = countPairs(nodes[0], 6)
console.log(count)
