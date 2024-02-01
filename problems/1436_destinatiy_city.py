class Solution:
    def destCity(self, paths: list[str]) -> str:
        origins = set()
        for path in paths:
            origins.add(path[0])
        for path in paths:
            if path[1] not in origins:
                return path[1]
        raise Exception("Invalid input")
