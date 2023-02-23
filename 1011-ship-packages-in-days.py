from __future__ import annotations
from heapq import heappush, heappop
from dataclasses import dataclass, field

Entry = tuple[int, list[int], bool]

# @dataclass(order=True)
# class Node:
#     weight: int
#     # sources: tuple[Node,Node] | None = field(compare=False)
#     sources: tuple[int,int] = field(compare=False)
#     neighbors: tuple[Node | None, Node | None] = field(default=(None,None),compare=False)
#     is_valid: bool = field(default=True, compare=False)

@dataclass(order=True)
class Node:
    weight: int
    sources: tuple[int,int] = field(compare=False)
    left: Node | None = field(compare=False)
    right: Node | None = field(compare=False)
    is_valid: bool = field(default=True, compare=False)


class Solution:
    def shipWithinDays(self, weights: list[int], days: int) -> int:
        num_weights = len(weights)
        if num_weights <= 0 or days <= 0 or num_weights < days:
            raise Exception("Invalid input")

        max_weight = weights[0]
        min_heap: list[Node] = []
        prev_node: Node | None

        for i in range(1, num_weights):
            max_weight = max(weights[i], max_weight)
            combined_weight = weights[i] + weights[i - 1]
            node = Node(combined_weight, sources=(weights[i - 1], weights[i]), left=prev_node)
            heappush(min_heap, node)
            if prev_node:
                prev_node.right = node
            prev_node = node
            # if i >= 1:
            #     combined_weight = weight + weights[i - 1]
            #     Node = 
            

        for weight in weights:
            max_weight = max(weight, max_weight)
            node = Node(weight, neighbors=(prev_node, None))
            if prev_node:
                prev_node.neighbors[1] = node
                combined_weight = weight + prev_node.weight
                combined_node = Node(combined_weight, sources=[prev_node, node])
                heappush(h, combined_node)
            prev_node = node

        for weight in weights:
            max_weight = max(weight, max_weight)
            node = Node(weight, neighbors=(prev_node, None))
            if prev_node:
                prev_node.neighbors[1] = node
                combined_weight = weight + prev_node.weight
                combined_node = Node(combined_weight, sources=[prev_node, node])
                heappush(h, combined_node)
            prev_node = node

        to_remove = num_weights - days

        while to_remove > 0:
            node = heappop(h)
            is_valid = node.sources[0].is_valid and node.sources[1].is_valid
            if is_valid:
                max_weight = max(node.weight, max_weight)
                to_remove -= 1

                # Mark used nodes as invalid.
                node.sources[0].is_valid = False
                node.sources[1].is_valid = False

                # Create a new node combining current node with old left and right
                # neighbors.
                left_neighbor = node.sources[0].neighbors[0]
                right_neighbor = node.sources[1].neighbors[1]
                
                if left_neighbor:
                    combined_weight = node.weight + left_neighbor.weight
                    heappush(h, Node(combined_weight, sources=(left_neighbor, node), neighbors=(left_neighbor, right_neighbor)))
                if right_neighbor:
                    combined_weight = node.weight + right_neighbor.weight
                    heappush(h, Node(combined_weight, sources=(node, right_neighbor), neighbors=(left_neighbor, right_neighbor)))

        lookup: dict[int, list[Entry]] = {}

        # Determine initial max weight. Compile min heap of weight pairings and an
        # associated lookup table.
        for i in range(num_weights):
            max_weight = max(max_weight, weights[i])

            if i >= 1:
                combined_weight = weights[i - 1] + weights[i]
                indexes = [i - 1, i]
                entry: Entry = (combined_weight, indexes, False)
                lookup[i] = [entry]

                if (i - 1) in lookup:
                    lookup[i - 1].append(entry)
                else:
                    lookup[i - 1] = [entry]

                heappush(h, entry)

        to_remove = num_weights - days

        while to_remove > 0:
            entry = heappop(h)
            weight, indexes, expired = entry
            if not expired:
                to_remove -= 1
                max_weight = max(max_weight, weight)
                
                # Update the neighboring entries by cloning and marking old one as
                # expired.
                low = indexes[0]
                high = indexes[-1]

                lookup[low]

                updates = []
                if low >= 1:
                    updates.append(low)
                if high < num_weights - 1:
                    updates.append(high)



                for i in indexes:


        print(h)
        print(to_remove)

        while len(h):
            entry = heappop(h)
            print(entry[0])

        return max_weight


Solution().shipWithinDays([3, 2, 2, 4, 1, 4], 3)
