# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isSymmetric(self, root: TreeNode | None) -> bool:
        if not root:
            return True
        nodes = [root.left, root.right]
        while nodes:
            n1 = nodes.pop(0)
            n2 = nodes.pop(0)
            if not n1 and not n2:
                continue
            elif not n1 or not n2 or n1.val != n2.val:
                return False
            else:
                nodes.append(n1.left)
                nodes.append(n2.right)
                nodes.append(n1.right)
                nodes.append(n2.left)

        return True
