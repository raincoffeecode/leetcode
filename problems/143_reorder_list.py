from typing import Self, cast


class ListNode:
    def __init__(self, val: int = 0, next: Self | None = None):
        self.val = val
        self.next = next


class Solution:
    def reorderList(self, head: ListNode | None) -> ListNode | None:
        slow = head
        fast = head
        while fast and fast.next and fast.next.next:
            slow = cast(ListNode, slow).next
            fast = fast.next.next

        mid = cast(ListNode, slow)

        p1 = head
        p2 = self.reverseList(mid.next)

        mid.next = None

        while p1 or p2:
            p1_next = p1.next if p1 else None
            p2_next = p2.next if p2 else None
            if p1:
                p1.next = p2
            if p2:
                p2.next = p1_next
            p1 = p1_next
            p2 = p2_next

        return head

    def reverseList(self, head: ListNode | None) -> ListNode | None:
        prev: ListNode | None = None
        cur = head
        while cur:
            next = cur.next
            cur.next = prev
            prev = cur
            cur = next
        return prev
