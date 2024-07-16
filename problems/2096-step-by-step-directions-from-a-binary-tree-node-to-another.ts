function getDirections(
  root: TreeNode,
  startValue: number,
  destValue: number
): string {
  let startPath = getPath(root, startValue)
  let destPath = getPath(root, destValue)

  // Determine node where the 2 paths diverge.
  while (startPath.length > 0 && destPath.length > 0) {
    if (startPath[0] !== destPath[0]) {
      break
    } else {
      startPath = startPath.substring(1)
      destPath = destPath.substring(1)
    }
  }

  // For valid directions, first needs to travel up to the diverging node. Then, the
  // remainder of the destination path can just be used verbatim.
  const directions = "U".repeat(startPath.length) + destPath

  return directions
}

function getPath(root: TreeNode, searchValue: number): string {
  const queue: [TreeNode, string][] = [[root, ""]]
  while (queue.length) {
    const [node, path] = queue.pop()!
    if (node.val === searchValue) {
      return path
    } else {
      if (node.left) {
        queue.push([node.left, path + "L"])
      }
      if (node.right) {
        queue.push([node.right, path + "R"])
      }
    }
  }
  throw new Error("Node not found.")
}
