from heapq import heapify, heappop, heappush
from dataclasses import dataclass, field


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


@dataclass(order=True)
class WrapperNode:
    val: int
    node: ListNode = field(compare=False)


class Solution:
    def mergeKLists(self, lists: list[ListNode | None]) -> ListNode | None:
        head: ListNode | None = None
        prev: ListNode | None = None
        nodes = [WrapperNode(n.val, n) for n in lists if n]
        heapify(nodes)

        while nodes:
            node = heappop(nodes).node
            next = node.next

            if prev:
                prev.next = node
            if not head:
                head = node

            if next:
                heappush(nodes, WrapperNode(next.val, next))

            prev = node
            prev.next = None

        return head
