class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def middleNode(self, head: ListNode | None) -> ListNode | None:
        a = head
        b = head
        while b is not None and b.next is not None:
            a = a.next
            b = b.next.next if b.next is not None else None
        return a
        
        """
        1  2  3  4  5

        1  2  3  4  5  6

        """