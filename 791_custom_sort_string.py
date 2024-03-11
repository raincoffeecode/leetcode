class Solution:
    def customSortString(self, order: str, s: str) -> str:
        result = ""
        order_lookup = {c: True for c in order}
        char_counts: dict[str, int] = {}

        for c in s:
            char_counts[c] = char_counts.get(c, 0) + 1

        for c in order:
            if c in char_counts:
                result += c * char_counts[c]

        for c in s:
            if c not in order_lookup:
                result += c

        return result
