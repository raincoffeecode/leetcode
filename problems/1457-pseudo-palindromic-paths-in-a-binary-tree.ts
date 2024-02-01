class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function pseudoPalindromicPaths(
  node: TreeNode | null,
  acc: number[] = Array(10).fill(0)
): number {
  if (!node) {
    return 0
  }
  const acc2 = [...acc]
  acc2[node.val] += 1

  const isLeaf = node.left === null && node.right === null

  if (isLeaf) {
    const oddCount = acc2.reduce(
      (acc, cur) => (cur % 2 === 0 ? acc : acc + 1),
      0
    )
    const isPalindrome = oddCount <= 1
    return isPalindrome ? 1 : 0
  } else {
    return (
      pseudoPalindromicPaths(node.left ?? null, acc2) +
      pseudoPalindromicPaths(node.right ?? null, acc2)
    )
  }
}

export {}
