class Solution:
    def minRemoveToMakeValid(self, s: str) -> str:
        depth = 0
        i = 0
        while i < len(s):
            if s[i] == "(":
                depth += 1
                i += 1
            elif s[i] == ")" and depth > 0:
                depth -= 1
                i += 1
            elif s[i] == ")" and depth == 0:
                s = s[0:i] + s[i + 1 :]
            else:
                i += 1

        depth = 0
        i = len(s) - 1
        while i >= 0:
            if s[i] == ")":
                depth += 1
            elif s[i] == "(" and depth > 0:
                depth -= 1
            elif s[i] == "(" and depth == 0:
                s = s[0:i] + s[i + 1 :]

            i -= 1

        return s
