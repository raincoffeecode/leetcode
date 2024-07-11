function minOperations(logs: string[]): number {
  let depth = 0
  for (const log of logs) {
    switch (log) {
      case "../":
        depth = depth === 0 ? 0 : depth - 1
        break
      case "./":
        break
      default:
        depth++
    }
  }
  return depth
}
