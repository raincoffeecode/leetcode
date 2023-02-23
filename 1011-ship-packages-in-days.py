from __future__ import annotations
from heapq import heappush, heappop
from dataclasses import dataclass, field


@dataclass(order=True)
class Node:
    weight: int
    sources: tuple[int, int] = field(compare=False)
    left: Node | None = field(default=None, compare=False)
    right: Node | None = field(default=None, compare=False)
    is_valid: bool = field(default=True, compare=False)


class Solution:
    def shipWithinDays(self, weights: list[int], days: int) -> int:
        num_weights = len(weights)
        if num_weights <= 0 or days <= 0 or num_weights < days:
            raise Exception("Invalid input")

        max_weight = 0
        min_heap: list[Node] = []
        prev_node: Node | None = None

        for i in range(num_weights):
            max_weight = max(weights[i], max_weight)
            if i >= 1:
                combined_weight = weights[i] + weights[i - 1]
                node = Node(
                    combined_weight,
                    sources=(weights[i - 1], weights[i]),
                    left=prev_node,
                )
                heappush(min_heap, node)
                if prev_node:
                    prev_node.right = node
                prev_node = node

        to_remove = num_weights - days

        while to_remove > 0:
            node = heappop(min_heap)
            if node.is_valid:
                max_weight = max(node.weight, max_weight)
                to_remove -= 1

                left_node: Node | None = None
                right_node: Node | None = None

                if node.left:
                    node.left.is_valid = False
                    left_node = Node(
                        node.left.sources[0] + node.weight,
                        sources=(node.left.sources[0], node.weight),
                        left=node.left.left,
                    )
                    heappush(min_heap, left_node)
                if node.right:
                    node.right.is_valid = False
                    right_node = Node(
                        node.right.sources[1] + node.weight,
                        sources=(node.weight, node.right.sources[1]),
                        right=node.right.right,
                    )
                    heappush(min_heap, right_node)

                if left_node:
                    left_node.right = right_node
                if right_node:
                    right_node.left = left_node

        return max_weight


# print(Solution().shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5))
print(Solution().shipWithinDays([3, 2, 2, 4, 1, 4], 3))
