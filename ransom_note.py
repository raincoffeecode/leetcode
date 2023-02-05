class Solution:
    def canConstruct(self, ransomNote: str, magazine: str) -> bool:
        d = {}
        for c in magazine:
            count = d[c] if c in d else 0
            d[c] = count + 1
        for c in ransomNote:
            if c not in d or d[c] <= 0:
                return False
            d[c] -= 1

        return all([count >= 0 for count in d.values()])


print(Solution().canConstruct("aa", "ab"))
