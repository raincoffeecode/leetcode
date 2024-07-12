function simplifyPath(path: string): string {
  const stack: string[] = []
  let i = 0
  while (i < path.length) {
    // Find next non-slash character.
    while (path[i] === "/") {
      i++
      if (i === path.length) {
        return "/" + stack.join("/")
      }
    }

    // Find next slash character.
    let j = i + 1
    while (j < path.length && path[j] !== "/") {
      j++
    }

    const s = path.substring(i, j)
    switch (s) {
      case ".":
        break
      case "..":
        stack.pop()
        break
      default:
        stack.push(s)
    }

    i = j
  }

  return "/" + stack.join("/")
}
