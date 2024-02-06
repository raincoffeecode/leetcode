const charCodes = "abcdefghijklmnopqrstuvwxyz"
  .split("")
  .reduce<{ [index: string]: number }>(
    (acc, cur, index) => ({ ...acc, [cur]: index }),
    {}
  )

function firstUniqChar(s: string): number {
  // Marks the index for the 1st occurence of each char or undefined if none exists. If
  // there are duplicates, set to -1.
  const charIndexes: Array<number | undefined> = Array(26)

  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    const charCode = charCodes[char]

    switch (charIndexes[charCode]) {
      case undefined:
        charIndexes[charCode] = i
        break
      case -1:
        break
      default:
        charIndexes[charCode] = -1
        break
    }
  }

  const uniqueIndexes = charIndexes.filter(
    (index): index is number => index !== undefined && index !== -1
  )

  return uniqueIndexes.length ? Math.min(...uniqueIndexes) : -1
}

export {}
