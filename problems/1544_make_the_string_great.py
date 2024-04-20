class Solution:
    def makeGood(self, s: str) -> str:
        start = 0
        while True:
            start_len = len(s)
            for i in range(start, len(s) - 1):
                if s[i] != s[i + 1] and s[i].lower() == s[i + 1].lower():
                    s = s[0:i] + s[i + 2 :]
                    start = max(0, i - 1)
                    break
            if len(s) == start_len:
                break
        return s
