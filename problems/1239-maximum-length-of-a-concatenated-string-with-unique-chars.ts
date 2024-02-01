function maxLength(arr: string[]): number {
  const n = arr.length
  const validSequences: Map<string, boolean>[] = []
  validSequences.push(new Map())

  for (let i = 0; i < n; i++) {
    const s = arr[i]
    let curSequence = new Map<string, boolean>()

    // Make sure current is valid with no duplicates.
    let validSequence = true
    for (const c of s) {
      if (curSequence.has(c)) {
        validSequence = false
        break
      }
      curSequence.set(c, true)
    }

    // Skip if not valid.
    if (!validSequence) {
      continue
    }

    // Compare against previously found valid sequences.
    for (const existing of validSequences) {
      let compatible = true
      for (const [c, _] of existing) {
        if (curSequence.has(c)) {
          compatible = false
          break
        }
      }

      if (compatible) {
        const combined = new Map([...existing, ...curSequence])
        validSequences.push(combined)
      }
    }
  }

  const lengths = validSequences.map((s) => s.size)
  return Math.max(...lengths)
}
