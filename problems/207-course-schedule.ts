function canFinish(numCourses: number, prereqs: [number, number][]): boolean {
  const blockedMap = new Map<number, Map<number, boolean>>(
    Array.from({ length: numCourses }, (_, i) => [
      i,
      new Map<number, boolean>(),
    ])
  )

  const unblocksMap = new Map<number, Map<number, boolean>>(
    Array.from({ length: numCourses }, (_, i) => [
      i,
      new Map<number, boolean>(),
    ])
  )

  for (const [course, prereq] of prereqs) {
    blockedMap.get(course)!.set(prereq, true)
    unblocksMap.get(prereq)!.set(course, true)
  }

  // Courses that can be taken.
  const unblocked: number[] = []

  // Fill unblocked initially with courses that have no prereqs.
  for (const [course, prereqs] of blockedMap) {
    if (prereqs.size === 0) {
      unblocked.push(course)
    }
  }

  while (unblocked.length) {
    const course = unblocked.pop()!
    for (const unblockedCourse of unblocksMap.get(course)!.keys()) {
      blockedMap.get(unblockedCourse)!.delete(course)
      if (blockedMap.get(unblockedCourse)!.size === 0) {
        unblocked.push(unblockedCourse)
      }
    }
  }

  for (const prereqs of blockedMap.values()) {
    if (prereqs.size > 0) {
      return false
    }
  }

  return true
}
