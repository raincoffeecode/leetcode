def is_palindrome(num: int) -> bool:
    if not isinstance(num, int):
        False
    s = str(num)
    length = len(s)
    for i in range(length // 2):
        if s[i] != s[length - 1 - i]:
            return False
    return True


# Follow up: Solve without converting int to str.
def is_palindrome2(num: int) -> bool:
    if not isinstance(num, int):
        False

    # Negatives values have a minus symbol at the beginning so will never be a palindrome.
    if num < 0:
        return False

    # 0-9 are palindromes since nothing to compare.
    if num < 10:
        return True

    # Determine the length i.e. number of digits in the number.
    length = 2
    while num / pow(10, length) >= 1:
        length += 1

    for i in range(length // 2):
        left = num % pow(10, length - i) // pow(10, length - 1 - i)
        right = num // pow(10, i) % 10
        if left != right:
            return False

    return True


# Based on the provided solution, reversing 2nd half and comparing with 1st half.
def is_palindrome3(num: int) -> bool:
    if not isinstance(num, int):
        False

    # Negatives numbers cannot be palindromes due to the `-` prefix.
    if num < 0:
        return False

    # Check edge case for single digits i.e. 0-9 which are palindromes.
    if num < 10:
        return True

    # If right most digit is 0, then it can't be a palindrome.
    if num % 10 == 0:
        return False

    # `a` represents the 1st half and `b` the reversed 2nd half at each step.
    a = num
    b = 0

    while a > b:
        # Shift last digit of `a` to `b`.
        b = b * 10 + a % 10
        a = a // 10

        # print(f"a:{a} b:{b}")

        if a == b:
            return True

        # Extra check for odd number of digits length.
        if a != 0 and a == b // 10:
            return True

    return False


print(is_palindrome3(21120))


class A:
    def f():
        while True:
            exceeds_range = (is_negative and rev_x * 10 - num <= neg_limit) or (
                not is_negative and rev_x * 10 + num >= pos_limit
            )
