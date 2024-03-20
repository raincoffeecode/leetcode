class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def mergeInBetween(
        self, list1: ListNode | None, a: int, b: int, list2: ListNode | None
    ) -> ListNode | None:
        p1 = list1
        for _ in range(1, a):
            p1 = p1.next

        p2 = p1.next
        for _ in range(a, b + 1):
            p2 = p2.next

        p3 = list2
        while p3.next is not None:
            p3 = p3.next

        p1.next = list2
        p3.next = p2

        return list1
