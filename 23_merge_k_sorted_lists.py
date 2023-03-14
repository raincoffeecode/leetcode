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
            n = heappop(nodes)
            next = n.node.next
            n.node.next = None

            if not prev:
                prev = n.node
                head = n.node
            else:
                prev.next = n.node
                prev = n.node

            if next:
                heappush(nodes, WrapperNode(next.val, next))

        return head
