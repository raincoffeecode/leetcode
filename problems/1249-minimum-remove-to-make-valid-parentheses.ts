function minRemoveToMakeValid(s: string): string {
  let depth = 0
  let i = 0

  while (i < s.length) {
    if (s[i] === "(") {
      depth++
      i++
    } else if (s[i] === ")" && depth > 0) {
      depth--
      i++
    } else if (s[i] === ")" && depth === 0) {
      s = s.slice(0, i) + s.slice(i + 1)
    } else {
      i++
    }
  }

  depth = 0
  i = s.length - 1

  while (i >= 0) {
    if (s[i] === ")") {
      depth++
    } else if (s[i] === "(" && depth > 0) {
      depth--
    } else if (s[i] === "(" && depth === 0) {
      s = s.slice(0, i) + s.slice(i + 1)
    }
    i--
  }

  return s
}
