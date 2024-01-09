# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right

class Solution:
    def leafSimilar(self, root1: TreeNode | None, root2: TreeNode | None) -> bool:
        values1 = self._get_leaf_values(root1)
        values2 = self._get_leaf_values(root2)
        return values1 == values2
    
    def _get_leaf_values(self, root: TreeNode | None) -> list[int]:
        values = []
        stack: list[TreeNode | None] = []
        cur = root
        while cur or stack:
            while cur:
                stack.append(cur)
                cur = cur.left
            
            cur = stack.pop()
            is_leaf = cur.left is None and cur.right is None
            if is_leaf:
                values.append(cur.val)

            cur = cur.right
        return values

