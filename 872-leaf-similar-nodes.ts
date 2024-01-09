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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const leafNums1 = getLeafNums(root1)
  const leafNums2 = getLeafNums(root2)
  if (leafNums1.length !== leafNums2.length) {
    return false
  }
  for (let i = 0; i < leafNums1.length; i++) {
    if (leafNums1[i] !== leafNums2[i]) {
      return false
    }
  }
  return true
}

function getLeafNums(root: TreeNode | null): number[] {
  const nums: number[] = []
  getLeafNumsHelper(root, nums)
  return nums
}

function getLeafNumsHelper(node: TreeNode | null, nums: number[]): void {
  if (!node) {
    return
  }
  const isLeaf = node.left === null && node.right === null
  getLeafNumsHelper(node.left, nums)
  if (isLeaf) {
    nums.push(node.val)
  }
  getLeafNumsHelper(node.right, nums)
}
