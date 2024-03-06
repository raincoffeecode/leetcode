function minimumLength(s: string): number {
  let start = 0
  let end = s.length - 1

  while (start < end && s[start] === s[end]) {
    const char = s[start]

    while (s[start] === char) {
      start++
      if (start === end) {
        return 0
      }
    }

    while (s[end] === char) {
      end--
    }
  }

  return 1 + end - start
}

minimumLength("cabaabac")

export {}
