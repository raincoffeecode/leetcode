from typing import Self


class TreeNode:
    def __init__(
        self, val: int = 0, left: Self | None = None, right: Self | None = None
    ):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def sumOfLeftLeaves(self, root: TreeNode | None) -> int:
        if not root:
            return 0

        val = 0
        stack = [root]

        while stack:
            node = stack.pop()
            if node.left:
                stack.append(node.left)
                if node.left.left is None and node.left.right is None:
                    val += node.left.val

            if node.right:
                stack.append(node.right)

        return val
