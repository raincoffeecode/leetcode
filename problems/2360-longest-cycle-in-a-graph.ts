function longestCycle(edges: number[]): number {
  const n = edges.length
  let longestLength = -1
  const visited = new Map<number, boolean>()

  for (let i = 0; i < n; i++) {
    if (visited.get(i)) {
      continue
    }
    const currentPath = new Map<number, boolean>([[i, true]])
    let node = i
    while (true) {
      node = edges[node]
      const isCycle = node === i
      const isCycleUnknownLength = !isCycle && !!currentPath.get(node)
      const isDeadEnd = node === -1

      if (isCycle) {
        longestLength = Math.max(longestLength, currentPath.size)
      }

      if (
        isCycle ||
        isDeadEnd ||
        (isCycleUnknownLength && currentPath.size <= longestLength)
      ) {
        for (const n of currentPath.keys()) {
          visited.set(n, true)
        }
      }

      if (isCycle || isCycleUnknownLength || isDeadEnd) {
        break
      }

      currentPath.set(node, true)
    }
  }
  return longestLength
}

console.log(longestCycle([3, 3, 4, 2, 3]))
