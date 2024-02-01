function compress(chars: string[]): number {
  let index = 0
  let writeIndex = 0
  let count = 0

  while (index < chars.length) {
    count++
    const char = chars[index]
    const nextChar = chars[index + 1]
    const isLast = char !== nextChar
    if (isLast) {
      chars[writeIndex++] = char
      if (count >= 2) {
        const s = `${count}`
        for (const c of s) {
          chars[writeIndex++] = c
        }
      }
      count = 0
    }
    index++
  }

  return writeIndex
}
