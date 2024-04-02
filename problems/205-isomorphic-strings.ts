function isIsomorphic(s: string, t: string): boolean {
  const mapping = new Map<string, string>()
  const used = new Map<string, boolean>()
  for (let i = 0; i < s.length; i++) {
    const char = s[i]
    if (!mapping.has(char) && !used.has(t[i])) {
      mapping.set(char, t[i])
      used.set(t[i], true)
    } else {
      if (mapping.get(char) !== t[i]) {
        return false
      }
    }
  }
  return true
}
