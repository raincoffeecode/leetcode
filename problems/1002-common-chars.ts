function commonChars(words: string[]): string[] {
  let freq = new Map<string, number>()

  for (let i = 0; i < words.length; i++) {
    const word = words[i]
    const freq2 = new Map<string, number>()
    for (const c of word) {
      const count = freq2.get(c) ?? 0
      if (i === 0 || count < (freq.get(c) ?? 0)) {
        freq2.set(c, count + 1)
      }
    }

    freq = freq2
  }

  const ans: string[] = []
  for (const [c, count] of freq.entries()) {
    ans.push(...Array(count).fill(c))
  }

  return ans
}
