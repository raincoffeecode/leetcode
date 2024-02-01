# Definition for singly-linked list.
class ListNode:
    def __init__(self, x):
        self.val = x
        self.next = None


class Solution:
    def detectCycle(self, head: ListNode | None) -> ListNode | None:
        if not head:
            return None

        cur1 = head
        cur2 = head.next.next if head.next else None
        while cur1 != cur2:
            if not cur1 or not cur2:
                return None
            cur1 = cur1.next
            cur2 = cur2.next.next if cur2.next else None

        size = 0
        cur1 = cur1.next if cur1 else None
        while cur1 != cur2:
            size += 1
            cur1 = cur1.next if cur1 else None

        cur1 = head
        cur2 = head
        for _ in range(size):
            cur2 = cur2.next if cur2 else None

        while cur2 and cur2.next != cur1:
            cur1 = cur1.next if cur1 else None
            cur2 = cur2.next

        return cur1
