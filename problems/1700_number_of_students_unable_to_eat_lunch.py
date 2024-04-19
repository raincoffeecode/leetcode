class Solution:
    def countStudents(self, students: list[int], sandwhiches: list[int]) -> int:
        n = len(students)
        studentCounts: dict[int, int] = {0: 0, 1: 0}
        for student in students:
            studentCounts[student] += 1
        for i in range(n):
            if studentCounts[sandwhiches[i]] == 0:
                return n - i
            studentCounts[sandwhiches[i]] -= 1
        return 0
