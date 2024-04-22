class Solution:
    def checkValidString(self, s: str) -> bool:
        left_parens: list[int] = []
        stars: list[int] = []

        for i, c in enumerate(s):
            match c:
                case "(":
                    left_parens.append(i)
                case ")":
                    if left_parens:
                        left_parens.pop()
                    elif stars:
                        stars.pop()
                    else:
                        return False
                case "*":
                    stars.append(i)

        while left_parens:
            i = left_parens.pop()
            while True:
                if not stars:
                    return False
                if stars.pop() > i:
                    break

        return True
