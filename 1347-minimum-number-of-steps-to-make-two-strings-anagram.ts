function minSteps(s: string, t: string): number {
  const charIndexes = "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .reduce<{ [index: string]: number }>(
      (acc, cur, index) => ({ [cur]: index, ...acc }),
      {}
    )

  const counts1 = Array<number>(26).fill(0)
  const counts2 = Array<number>(26).fill(0)

  for (const c of s) {
    const index = charIndexes[c]
    counts1[index]++
  }

  for (const c of t) {
    const index = charIndexes[c]
    counts2[index]++
  }

  let diffs = 0

  for (let i = 0; i < 26; i++) {
    diffs += Math.abs(counts1[i] - counts2[i])
  }

  return diffs / 2
}

minSteps("bab", "aba")
