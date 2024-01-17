function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map<number, number>()
  const counts = new Set<number>()

  for (const num of arr) {
    map.set(num, (map.get(num) ?? 0) + 1)
  }

  for (const count of map.values()) {
    if (counts.has(count)) {
      return false
    }
    counts.add(count)
  }

  return true
}
