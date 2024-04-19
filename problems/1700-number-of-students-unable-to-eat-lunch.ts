function countStudents(students: number[], sandwiches: number[]): number {
  const n = students.length
  const studentCounts: [number, number] = [0, 0]

  for (const student of students) {
    studentCounts[student] += 1
  }

  for (let i = 0; i < n; i++) {
    const sandwich = sandwiches[i]
    if (studentCounts[sandwich] === 0) {
      return n - i
    }
    studentCounts[sandwich] -= 1
  }

  return 0
}
