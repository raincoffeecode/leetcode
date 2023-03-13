function sortedListToBST(head: ListNode | null): TreeNode | null {
  if (!head) {
    return null
  }
  const values: number[] = []
  let node: ListNode | null = head
  while (node) {
    values.push(node.val)
    node = node.next
  }
  return recursiveSortedListToBST(0, values.length - 1, values)
}

function recursiveSortedListToBST(
  left: number,
  right: number,
  values: number[]
): TreeNode | null {
  if (left === right) {
    return new TreeNode(values[left])
  } else if (left > right) {
    return null
  } else {
    const mid = Math.floor((left + right) / 2)
    const leftNode = recursiveSortedListToBST(left, mid - 1, values)
    const rightNode = recursiveSortedListToBST(mid + 1, right, values)
    return new TreeNode(values[mid], leftNode, rightNode)
  }
}

// function recursiveSortedListToBST2(
//   left: ListNode | null,
//   right: ListNode | null
// ): TreeNode | null {
//   if (!left) {
//     return null
//   } else if (left === right) {
//     return new TreeNode(left.val)
//   }

//   if (left === right || (left?.next ?? null) === right) {
//     return new TreeNode(left.val)
//   }
//   let a: ListNode = left
//   let b: ListNode | null = left
//   while (b !== right) {
//     a = a.next!
//     b = b!.next === right ? right : b!.next!.next ?? null
//   }
// }
