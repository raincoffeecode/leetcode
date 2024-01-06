function maxLengthBetweenEqualCharacters(s: string): number {
  const aCharCode = "a".charCodeAt(0)
  const prevIndexes = Array(26)
  let maxLength = -1
  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i) - aCharCode
    const prevIndex = prevIndexes[charCode]
    if (prevIndex !== undefined) {
      maxLength = Math.max(maxLength, i - prevIndex)
    }
    prevIndexes[charCode] ??= i
  }
  return maxLength === -1 ? -1 : maxLength - 1
}
