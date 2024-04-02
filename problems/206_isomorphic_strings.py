class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:
        mapping: dict[str, str] = {}
        used: dict[str, bool] = {}
        for i in range(len(s)):
            c1 = s[i]
            c2 = t[i]
            if c1 not in mapping and c2 not in used:
                mapping[c1] = c2
                used[c2] = True
            else:
                if mapping.get(c1) != c2:
                    return False

        return True
