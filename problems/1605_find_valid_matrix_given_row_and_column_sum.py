from heapq import heapify, heappop, heapreplace


class Solution:
    def restoreMatrix(self, rowSum: list[int], colSum: list[int]) -> list[list[int]]:
        m = len(rowSum)
        n = len(colSum)
        matrix = [[0] * n for _ in range(m)]

        row_heap = [(sum, i) for i, sum in enumerate(rowSum)]
        col_heap = [(sum, i) for i, sum in enumerate(colSum)]

        heapify(row_heap)
        heapify(col_heap)

        while row_heap:
            [row_min, row_index] = row_heap[0]
            [col_min, col_index] = col_heap[0]
            min_val = min(row_min, col_min)

            matrix[row_index][col_index] += min_val

            if row_min == min_val:
                heappop(row_heap)
            else:
                heapreplace(row_heap, (row_min - min_val, row_index))

            if col_min == min_val:
                heappop(col_heap)
            else:
                heapreplace(col_heap, (col_min - min_val, col_index))

        return matrix
