class Solution:
    def commonChars(self, words: list[str]) -> list[str]:
        freq: dict[str, int] = {}

        for i, word in enumerate(words):
            freq2: dict[str, int] = {}

            for c in word:
                count = freq2.get(c, 0)
                if i == 0 or count < freq.get(c, 0):
                    freq2[c] = count + 1

            freq = freq2

        ans: list[str] = []

        for c, count in freq.items():
            ans += [c] * count

        return ans
