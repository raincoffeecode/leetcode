# https://leetcode.com/problems/fizz-buzz/


class Solution:
    def fizzBuzz(self, n: int) -> list[str]:
        if not isinstance(n, int) or n <= 0:
            return []
        result = [0] * n
        for i in range(n):
            fizz = (i + 1) % 3 == 0
            buzz = (i + 1) % 5 == 0
            if fizz and buzz:
                result[i] = "FizzBuzz"
            elif fizz:
                result[i] = "Fizz"
            elif buzz:
                result[i] = "Buzz"
            else:
                result[i] = str(i + 1)
        return result
