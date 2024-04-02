from typing import Self


class TreeNode:
    def __init__(self, val: int | None, left: Self | None, right: Self | None):
        self.val = val
        self.left = left
        self.right = right


# Iterative solution.
class Solution:
    def isSameTree(self, p: TreeNode | None, q: TreeNode | None) -> bool:
        stack1 = [p]
        stack2 = [q]

        while stack1:
            n1 = stack1.pop()
            n2 = stack2.pop()

            if not n1 and not n2:
                continue

            n1_val = n1.val if n1 else None
            n2_val = n2.val if n2 else None

            if n1_val != n2_val:
                return False

            if n1:
                stack1.append(n1.left)
                stack1.append(n1.right)

            if n2:
                stack2.append(n2.left)
                stack2.append(n2.right)

        if len(stack1) != len(stack2):
            return False

        return True


# Recursive solution.
class RecursiveSolution:
    def isSameTree(self, p: TreeNode | None, q: TreeNode | None) -> bool:
        if not p and not q:
            return True

        p_val = p.val if p else None
        q_val = q.val if q else None

        if p_val != q_val:
            return False

        p_left = p.left if p else None
        p_right = p.right if p else None
        q_left = q.left if q else None
        q_right = q.right if q else None

        return self.isSameTree(p_left, q_left) and self.isSameTree(p_right, q_right)
