from typing import Self


class TreeNode:
    def __init__(
        self, val: int = 0, left: Self | None = None, right: Self | None = None
    ):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def smallestFromLeaf(self, root: TreeNode | None) -> str:
        if root is None:
            return ""

        smallest: list[int] = []

        def traverse(node: TreeNode | None, acc: list[int] = []) -> None:
            nonlocal smallest
            if node is None:
                return

            is_leaf = node.left is None and node.right is None
            digits = [node.val, *acc]

            traverse(node.left, digits)
            traverse(node.right, digits)

            if is_leaf:
                if not smallest:
                    smallest = digits
                else:
                    min_length = min(len(smallest), len(digits))
                    for i in range(min_length):
                        if digits[i] < smallest[i]:
                            smallest = digits
                            return
                        if digits[i] > smallest[i]:
                            return

                    # If we reach here, it means all the characters were the same so
                    # take the shorter of the 2 strings.
                    if len(digits) < len(smallest):
                        smallest = digits

        traverse(root)
        chars = [chr(ord("a") + digit) for digit in smallest]
        return "".join(chars)
