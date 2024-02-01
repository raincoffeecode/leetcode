function closeStrings(word1: string, word2: string): boolean {
  const charIndexes = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .reduce<{ [index: string]: number }>(
      (acc, cur, index) => ({ [cur]: index, ...acc }),
      {}
    )

  const counts1: number[] = Array(26).fill(0)
  const counts2: number[] = Array(26).fill(0)

  for (const c of word1) {
    const index = charIndexes[c]
    counts1[index]++
  }

  for (const c of word2) {
    const index = charIndexes[c]
    counts2[index]++
  }

  for (let i = 0; i < 26; i++) {
    const mismatch =
      (counts1[i] >= 1 && counts2[i] === 0) ||
      (counts1[i] === 0 && counts2[i] >= 1)
    if (mismatch) {
      return false
    }
  }

  const sorted1 = [...counts1].sort((a, b) => a - b)
  const sorted2 = [...counts2].sort((a, b) => a - b)

  for (let i = 0; i < 26; i++) {
    if (sorted1[i] !== sorted2[i]) {
      return false
    }
  }

  return true
}
