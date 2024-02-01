function sumNumbers(root: TreeNode | null) {
  return sumNumbersIterative(root)
}

function sumNumbersRecursive(
  root: TreeNode | null,
  sequence: number = 0
): number {
  if (!root) {
    return 0
  }
  const isLeaf = !root.left && !root.right
  const num = sequence * 10 + root.val
  if (isLeaf) {
    return num
  } else {
    const leftNum = root.left ? sumNumbersRecursive(root.left, num) : 0
    const rightNum = root.right ? sumNumbersRecursive(root.right, num) : 0
    return leftNum + rightNum
  }
}

function sumNumbersIterative(root: TreeNode | null): number {
  if (!root) {
    return 0
  }
  let sum = 0
  const stack: [TreeNode, number][] = [[root, 0]]

  while (stack.length) {
    const [node, acc] = stack.pop()!
    const isLeaf = !node.left && !node.right
    const val = acc * 10 + node.val
    if (isLeaf) {
      sum += val
    } else {
      if (node.left) {
        stack.push([node.left, val])
      }
      if (node.right) {
        stack.push([node.right, val])
      }
    }
  }

  return sum
}

// There is another solution called the Morris Preorder Traversal but it's nuanced and
// I'm not going to bother memorizing it. It allows for use of no extra space.
