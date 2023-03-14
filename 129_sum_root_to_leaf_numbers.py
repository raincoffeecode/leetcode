from __future__ import annotations
from dataclasses import dataclass


@dataclass
class TreeNode:
    val: int
    left: TreeNode | None
    right: TreeNode | None


class Solution:
    def sumNumbers(self, root: TreeNode | None) -> int:
        return self.sumNumbersIterative(root)

    def sumNumbersRecursive(self, root: TreeNode | None, acc: int = 0) -> int:
        if not root:
            return 0
        is_leaf = root.left is None and root.right is None
        val = acc * 10 + root.val
        if is_leaf:
            return val
        else:
            left_val = self.sumNumbersRecursive(root.left, val) if root.left else 0
            right_val = self.sumNumbersRecursive(root.right, val) if root.right else 0
            return left_val + right_val

    def sumNumbersIterative(self, root: TreeNode | None) -> int:
        if not root:
            return 0
        sum = 0
        stack = [(root, 0)]
        while stack:
            node, acc = stack.pop()
            is_leaf = node.left is None and node.right is None
            val = acc * 10 + node.val
            if is_leaf:
                sum += val
            else:
                if node.left:
                    stack.append((node.left, val))
                if node.right:
                    stack.append((node.right, val))
        return sum
