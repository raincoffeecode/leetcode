import UnionFind from "./utils/union-find"

function countPairs(n: number, edges: number[][]): number {
  const uf = new UnionFind(n)

  for (const edge of edges) {
    const [a, b] = edge
    uf.union(a, b)
  }

  const groupCounts = new Map<number, number>()

  for (let i = 0; i < n; i++) {
    const root = uf.findRoot(i)
    const currentCount = groupCounts.get(root) ?? 0
    groupCounts.set(root, currentCount + 1)
  }

  let numPairs = 0
  const groupCountsArray = [...groupCounts.values()]

  for (let i = 0; i < groupCountsArray.length; i++) {
    for (let j = i + 1; j < groupCountsArray.length; j++) {
      numPairs += groupCountsArray[i] * groupCountsArray[j]
    }
  }

  return numPairs
}
