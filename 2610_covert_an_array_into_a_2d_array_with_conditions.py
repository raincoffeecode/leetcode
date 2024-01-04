class Solution:
    def findMatrix(self, nums: list[int]) -> list[list[int]]:
        matrix: list[list[int]] = []
        entries = [0] * 200
        for num in nums:
            entries[num - 1] += 1
        for num in range(1, 201):
            count = entries[num - 1]
            for i in range(count):
                if i > len(matrix) - 1:
                    matrix.append([])
                matrix[i].append(num)
        return matrix


result = Solution().findMatrix([9, 8, 8, 4, 9, 8, 8, 3, 9])
print(result)
