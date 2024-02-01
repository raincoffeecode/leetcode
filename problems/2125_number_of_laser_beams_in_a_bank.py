class Solution:
    def numberOfBeams(self, bank: list[str]) -> int:
        num_beams = 0
        prev_count: int | None = None

        for floor in bank:
            count = 0
            for c in floor:
                if c == "1":
                    count += 1
            if prev_count is not None:
                num_beams += count * prev_count
            if count > 0:
                prev_count = count

        return num_beams
