from typing import Self


class ListNode:
    def __init__(self, val: int = 0, next: Self | None = None):
        self.val = val
        self.next = next


class Solution:
    def doubleIt(self, head: ListNode | None) -> ListNode | None:
        nodes: list[ListNode] = []
        cur = head
        while cur:
            nodes.append(cur)
            cur = cur.next

        carry = 0
        while nodes:
            cur = nodes.pop()
            val = cur.val * 2 + carry
            cur.val = val % 10
            carry = val // 10

        return cur if carry == 0 else ListNode(carry, cur)
