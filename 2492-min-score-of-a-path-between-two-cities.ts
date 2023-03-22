import UnionFind from "./utils/union-find"

function minScore(n: number, roads: number[][]): number {
  if (n < 2 || !roads.length) {
    throw new Error("Invalid input.")
  }
  let minScore = roads[0][2]
  const uf = new UnionFind(n)
  for (const [a, b, _] of roads) {
    uf.union(a - 1, b - 1)
  }
  for (const [a, b, distance] of roads) {
    if (uf.connected(0, a - 1) || uf.connected(0, b - 1)) {
      minScore = Math.min(minScore, distance)
    }
  }
  return minScore
}
