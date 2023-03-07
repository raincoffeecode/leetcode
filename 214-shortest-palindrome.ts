// I give up on this one.

function shortestPalindrome(s: string): string {
  if (!s.length) {
    throw new Error("Invalid input.")
  }
  const leftSet = Array.from({ length: 26 }, () => new Set<number>())
  const rightSet = Array.from({ length: 26 }, () => new Set<number>())
  const mid = (s.length - 1) / 2

  for (let i = 0; i < s.length; i++) {
    const charCode = s.charCodeAt(i) - "a".charCodeAt(0)
    if (i <= mid) {
      leftSet[charCode].add(i)
    }
    if (i >= mid) {
      rightSet[charCode].add(i)
    }
  }
  let offset = 0

  while (offset < mid) {
    let isMatching = true

    for (let i = 0; i < 26 && isMatching; i++) {
      for (const index of leftSet[i]) {
        const hasMatch = rightSet[i].has(2 * (mid - offset) - index)
        if (!hasMatch) {
          isMatching = false
          break
        }
      }
    }

    if (isMatching) {
      break
    } else {
      offset++
      const index = Math.ceil(mid) - offset
      const charCode = s.charCodeAt(index) - "a".charCodeAt(0)
      leftSet[charCode].delete(index)
      rightSet[charCode].add(index)
    }
  }

  const prefix = s
    .substring(s.length - offset)
    .split("")
    .reverse()
    .join("")

  const suffix = s.substring(Math.ceil(mid) - offset)

  return prefix + suffix
}

console.log(shortestPalindrome("aacecaaa"))
