function groupAnagrams(strs: string[]): string[][] {
  const entries = new Map<string, string[]>()
  for (const s of strs) {
    const sorted = s.split("").sort().join("")
    if (!entries.has(sorted)) {
      entries.set(sorted, [])
    }
    entries.get(sorted)!.push(s)
  }

  return [...entries.values()]
}
