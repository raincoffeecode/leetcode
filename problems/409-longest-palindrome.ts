function longestPalindrome(s: string): number {
  const charCounts = new Map<string, number>()
  for (const char of s) {
    charCounts.set(char, (charCounts.get(char) ?? 0) + 1)
  }
  let ans = 0
  for (const count of charCounts.values()) {
    if (count >= 2) {
      ans += count - (count % 2)
    }
  }
  return s.length > ans ? ans + 1 : ans
}
