from __future__ import annotations
from dataclasses import dataclass


class TreeNode:
    val: int
    left: TreeNode | None
    right: TreeNode | None


class Solution:
    def isCompleteTree(self, root: TreeNode | None) -> bool:
        queue: list[TreeNode | None] = [root]
        empty_slot_encountered = False

        while queue:
            node = queue.pop(0)
            if node is None:
                empty_slot_encountered = True
                continue

            if empty_slot_encountered:
                return False

            queue.append(node.left)
            queue.append(node.right)

        return True
