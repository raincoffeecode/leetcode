from typing import Self


class TreeNode:
    def __init__(
        self, val: int = 0, left: Self | None = None, right: Self | None = None
    ):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def addOneRow(self, root: TreeNode | None, val: int, depth: int) -> TreeNode | None:
        if not root:
            raise Exception("Invalid input.")
        match depth:
            case 1:
                node = TreeNode(val, root)
                return node
            case 2:
                root.left = TreeNode(val, root.left)
                root.right = TreeNode(val, None, root.right)
            case _:
                if root.left:
                    self.addOneRow(root.left, val, depth - 1)
                if root.right:
                    self.addOneRow(root.right, val, depth - 1)
        return root
