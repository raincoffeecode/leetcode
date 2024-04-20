function maxDepth(s: string): number {
  let depth = 0
  let maxDepth = 0
  for (const char of s) {
    switch (char) {
      case "(":
        depth++
        maxDepth = Math.max(maxDepth, depth)
        break
      case ")":
        depth--
        break
    }
  }
  return maxDepth
}

maxDepth("(1+(2*3)+((8)/4))+1")
