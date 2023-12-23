function isPathCrossing(path: string): boolean {
  let position: [number, number] = [0, 0]
  const visited = new Set([`${position}`])
  for (const direction of path) {
    switch (direction) {
      case "N":
        position[1] += 1
        break
      case "E":
        position[0] += 1
        break
      case "S":
        position[1] -= 1
        break
      case "W":
        position[0] -= 1
        break
    }
    const key = `${position}`
    if (visited.has(key)) {
      return true
    }
    visited.add(key)
  }
  return false
}
