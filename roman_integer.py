# https://leetcode.com/problems/roman-to-integer/

# I             1
# V             5
# X             10
# L             50
# C             100
# D             500
# M             1000


class Solution:
    def romanToInt(self, s: str) -> int:
        number = 0
        index = 0
        while index < len(s):
            c1 = s[index]
            c2 = s[index + 1] if index + 1 < len(s) else None
            is_sub = False
            match (c1, c2):
                case ("C", "M"):
                    number += 900
                    is_sub = True
                case ("C", "D"):
                    number += 400
                    is_sub = True
                case ("X", "C"):
                    number += 90
                    is_sub = True
                case ("X", "L"):
                    number += 40
                    is_sub = True
                case ("I", "X"):
                    number += 9
                    is_sub = True
                case ("I", "V"):
                    number += 4
                    is_sub = True
                case ("M", _):
                    number += 1000
                case ("D", _):
                    number += 500
                case ("C", _):
                    number += 100
                case ("L", _):
                    number += 50
                case ("X", _):
                    number += 10
                case ("V", _):
                    number += 5
                case ("I", _):
                    number += 1
            if is_sub:
                index += 2
            else:
                index += 1
        return number


s1 = Solution()
print(s1.romanToInt("LVIII"))
