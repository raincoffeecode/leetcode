from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def isPalindrome(self, head: ListNode | None) -> bool:
        # Iterate list to determine size to determine middle of list.
        length = 0
        cursor = head
        while cursor is not None:
            length += 1
            cursor = cursor.next

        # self.print(head)

        # Reverse the 2nd half of the list in place.
        index = 0
        cursor = head
        middle_node: ListNode | None = None
        while cursor is not None:
            if index + 1 >= length / 2:
                middle_node = cursor
                middle_node.next = self.reverse(middle_node.next)
                break

            cursor = cursor.next
            index += 1

        # self.print(head)

        a = head
        b = middle_node.next

        is_palindrome = True

        while a is not None and b is not None:
            if a.val != b.val:
                is_palindrome = False
                break
            a = a.next
            b = b.next

        # Reverse the 2nd half back to original order.
        middle_node.next = self.reverse(middle_node.next)

        # self.print(head)

        return is_palindrome

    def reverse(self, head: ListNode | None) -> ListNode | None:
        # Reverses linked list and returns the new first node.
        if head is None:
            return None

        a = head
        b = head.next if head is not None else None
        head.next = None
        while b is not None:
            c = b.next
            b.next = a
            a = b
            b = c
        return a

    def print(self, head: ListNode):
        cursor = head
        s = ""
        while cursor is not None:
            s += f" {cursor.val}"
            cursor = cursor.next
        print(s)

    # This solution does not work because a list could be set in such a way that it
    # cancels out the entries even if not a palindrome.
    def isPalindrome_incorrect(self, head: Optional[ListNode]) -> bool:
        # Iterate list to determine size.
        count = 0
        cursor = head
        while cursor is not None:
            count += 1
            cursor = cursor.next

        # Middle index, will end in 0.5 if size is even.
        m_index = (count - 1) / 2

        # Iterate list again to create a tally of each number 0-9. Each entry will keep
        # add a negative or positive number corresponding to its relative index in the
        # list as compared to the middle index.
        entries = [0] * 10
        index = 0
        cursor = head
        while cursor is not None:
            r_index = index - m_index
            entries[cursor.val] += r_index
            val = cursor.val
            cursor = cursor.next
            index += 1
            print(f"entry: {val}\tindex: {index-1}\trelative: {r_index}\t{entries}")

        return all(e == 0 for e in entries)


n8 = ListNode(3)
n7 = ListNode(2, n8)
n6 = ListNode(2, n7)
n5 = ListNode(3, n6)
n4 = ListNode(2, n5)
n3 = ListNode(3, n4)
n2 = ListNode(3, n3)
n1 = ListNode(2, n2)

# n8 = ListNode(7)
# n7 = ListNode(6, n8)
# n6 = ListNode(5, n7)
# n5 = ListNode(4, n6)
# n4 = ListNode(3, n5)
# n3 = ListNode(2, n4)
# n2 = ListNode(1, n3)
# n1 = ListNode(0, n2)

# n5 = ListNode(1)
# n4 = ListNode(5, n5)
# n3 = ListNode(6, n4)
# n2 = ListNode(5, n3)
# n1 = ListNode(1, n2)

# [2, 3, 3, 2, 3, 2, 2, 3]

print(Solution().isPalindrome(n1))
