/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function rangeSumBST(root: TreeNode | null, low: number, high: number): number {
  if (!root) {
    return 0
  }
  const includeLeft = root.val >= low
  const includeRight = root.val <= high
  let val = root.val >= low && root.val <= high ? root.val : 0
  if (includeLeft) {
    val += rangeSumBST(root.left, low, high)
  }
  if (includeRight) {
    val += rangeSumBST(root.right, low, high)
  }
  return val
}
