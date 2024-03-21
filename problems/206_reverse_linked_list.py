from typing import Self


class ListNode:
    def __init__(self, val=0, next: Self | None = None):
        self.val = val
        self.next = next


# Given the head of a singly linked list, reverse the list, and return the reversed
# list.
class Solution:
    def reverseList(self, head: ListNode | None) -> ListNode | None:
        cur: ListNode | None = head
        prev: ListNode | None = None

        while cur:
            next = cur.next
            cur.next = prev
            prev = cur
            cur = next

        return prev


class Solution2:
    def reverseList(self, head: ListNode | None) -> ListNode | None:
        if head is None:
            return None

        nodes = [head]
        cur = head

        # Walk the list and store nodes in a list.
        while cur.next is not None:
            cur = cur.next
            nodes.append(cur)

        # Keep reference of last node so we can return as new head.
        new_head = cur

        # Pop off nodes from list and update references.
        while nodes:
            next = nodes.pop()
            cur.next = next
            cur = next

        # Update the new tail to point to null.
        cur.next = None

        return new_head
