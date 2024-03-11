function customSortString(order: string, s: string): string {
  let result = ""
  const orderedLookup = new Set(order)
  const sCounts = new Map<string, number>()

  for (const char of s) {
    const count = (sCounts.get(char) ?? 0) + 1
    sCounts.set(char, count)
  }

  for (const char of order) {
    const count = sCounts.get(char)
    if (count !== undefined) {
      result += Array(count).fill(char).join("")
    }
  }

  for (const char of s) {
    if (!orderedLookup.has(char)) {
      result += char
    }
  }

  return result
}
