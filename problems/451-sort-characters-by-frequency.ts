function frequencySort(s: string): string {
  const charCounts = new Map<string, number>()

  for (const c of s) {
    const updatedCount = (charCounts.get(c) ?? 0) + 1
    charCounts.set(c, updatedCount)
  }

  // Sort based on the frequency.
  const sorted = [...charCounts.entries()].sort(
    ([_1, aCount], [_2, bCount]) => bCount - aCount
  )

  // Convert to equivalent string e.g. c: 3 => "ccc".
  const result = sorted.map(([c, count]) => c.repeat(count)).join("")

  return result
}

export {}
