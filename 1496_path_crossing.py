type Point = tuple[int, int]


class Solution:
    def isPathCrossing(self, path: str) -> bool:
        loc: Point = (0, 0)
        visited: set[Point] = set([loc])
        for dir in path:
            match dir:
                case "N":
                    loc = (loc[0], loc[1] + 1)
                case "E":
                    loc = (loc[0] + 1, loc[1])
                case "S":
                    loc = (loc[0], loc[1] - 1)
                case "W":
                    loc = (loc[0] - 1, loc[1])

            if loc in visited:
                return True
            else:
                visited.add(loc)

        return False
