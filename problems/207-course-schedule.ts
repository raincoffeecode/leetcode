function canFinish(numCourses: number, prereqs: [number, number][]): boolean {
  // The number of prereqs that still need to be completed before a course can be taken.
  const openPrereqsCount = Array(numCourses).fill(0)

  // A mapping of a course to other courses that it serves as a prereq too.
  const prereqsMap = new Map<number, number[]>(
    Array.from({ length: numCourses }, (_, i) => [i, []])
  )

  for (const [course, prereq] of prereqs) {
    openPrereqsCount[course]++
    prereqsMap.get(prereq)!.push(course)
  }

  const unblocked: number[] = []

  // Construct initial list of unblocked courses.
  for (let i = 0; i < numCourses; i++) {
    if (openPrereqsCount[i] === 0) {
      unblocked.push(i)
    }
  }

  while (unblocked.length) {
    const course = unblocked.pop()!
    const unblocks = prereqsMap.get(course)!
    for (const unblock of unblocks) {
      openPrereqsCount[unblock]--
      if (openPrereqsCount[unblock] === 0) {
        unblocked.push(unblock)
      }
    }
  }

  return openPrereqsCount.every((count) => count === 0)
}

canFinish(2, [[1, 0]])
