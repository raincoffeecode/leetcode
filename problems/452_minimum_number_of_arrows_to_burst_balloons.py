Point = list[int]


class Solution:
    def findMinArrowShots(self, points: list[Point]) -> int:
        points.sort(key=lambda p: p[0])

        current_range: int | None = None
        count = 0

        for point in points:
            if current_range is None or point[0] > current_range:
                count += 1
                current_range = point[1]
            else:
                current_range = min(current_range, point[1])

        return count
