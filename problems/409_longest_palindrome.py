class Solution:
    def longestPalindrome(self, s: str) -> int:
        counts: dict[str, int] = {}
        for char in s:
            counts[char] = counts.get(char, 0) + 1
        ans = 0
        for count in counts.values():
            if count >= 2:
                ans += count - count % 2
        if len(s) > ans:
            ans += 1
        return ans
