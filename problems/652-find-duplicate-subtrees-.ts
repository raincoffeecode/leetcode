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

function findDuplicateSubtrees(root: TreeNode | null): TreeNode[] {
  const seenPatterns: { [index: string]: number } = {}
  const duplicates: TreeNode[] = []
  traverse(root, duplicates, seenPatterns)
  return duplicates
}

function traverse(
  node: TreeNode | null,
  duplicates: TreeNode[],
  seenPatterns: { [index: string]: number }
): string {
  if (!node) {
    return ""
  } else {
    const sLeft = traverse(node.left, duplicates, seenPatterns)
    const sRight = traverse(node.right, duplicates, seenPatterns)
    const s = `(${sLeft}) ${node.val} (${sRight})`
    switch (seenPatterns[s]) {
      case undefined:
        seenPatterns[s] = 1
        break
      case 1:
        duplicates.push(node)
        seenPatterns[s]++
        break
      default:
        seenPatterns[s]++
        break
    }
    return s
  }
}
