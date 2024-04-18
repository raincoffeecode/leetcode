export {}

class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null

  constructor(
    val: number = 0,
    left: TreeNode | null = null,
    right: TreeNode | null = null
  ) {
    this.val = val
    this.left = left
    this.right = right
  }
}

const CHAR_CODES_MAP: { [index: number]: string } = "abcdefghijklmnopqrstuvwxyz"
  .split("")
  .reduce((acc, char, i) => ({ ...acc, [i]: char }), {})

function smallestFromLeaf(root: TreeNode | null): string {
  let smallest: number[] = []

  function traverse(node: TreeNode | null, acc: number[]): void {
    if (node) {
      const digits = [node.val, ...acc]
      const isLeaf = node.left === null && node.right === null

      traverse(node.left, digits)
      traverse(node.right, digits)

      if (isLeaf) {
        if (smallest.length === 0) {
          smallest = digits
        } else {
          const minLength = Math.min(smallest.length, digits.length)
          for (let i = 0; i < minLength; i++) {
            if (digits[i] < smallest[i]) {
              smallest = digits
              return
            } else if (digits[i] > smallest[i]) {
              return
            }
          }

          // If we got here, it means one of the array is a prefix of the other, so set
          // smallest to be the shorter of the 2.
          if (digits.length < smallest.length) {
            smallest = digits
          }
        }
      }
    }
  }

  traverse(root, [])
  const str = smallest.map((code) => CHAR_CODES_MAP[code]).join("")
  return str
}

const n0 = new TreeNode(4)
const n1 = new TreeNode(0)
const n2 = new TreeNode(1)
const n3 = new TreeNode(1)

n0.left = n1
n0.right = n2
n1.left = n3

console.log(smallestFromLeaf(n0))
