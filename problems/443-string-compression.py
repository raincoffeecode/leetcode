class Solution:
    def compress(self, chars: list[str]) -> int:
        index = 0
        write_index = 0
        count = 0

        while index < len(chars):
            count += 1
            char = chars[index]
            next_char = chars[index + 1] if index < len(chars) - 1 else None
            is_last = char != next_char
            if is_last:
                chars[write_index] = char
                write_index += 1
                if count >= 2:
                    s = str(count)
                    for c in s:
                        chars[write_index] = c
                        write_index += 1
                count = 0
            index += 1

        return write_index
