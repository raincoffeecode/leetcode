from __future__ import annotations
from random import randrange


class ListNode:
    def __init__(self, val: int, next: ListNode | None):
        self.val = val
        self.next = next


class Solution:
    def __init__(self, head: ListNode):
        self.head = head
        length, node = 0, head
        while node:
            length += 1
            node = node.next
        self.length = length

    def getRandom(self) -> int:
        index = randrange(self.length)
        node = self.head
        for _ in range(index):
            node = node.next
        return node.val
