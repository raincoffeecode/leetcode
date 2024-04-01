class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        n = len(s)
        cur = n - 1
        while s[cur] == " ":
            cur -= 1
        length = 0
        while cur >= 0 and s[cur] != " ":
            length += 1
            cur -= 1
        return length
