import UnionFind from "./union-find"

function makeConnected(n: number, connections: number[][]): number {
  if (connections.length < n - 1) {
    return -1
  }
  const uf = new UnionFind(n)
  for (const [a, b] of connections) {
    uf.union(a, b)
  }
  const disjointSets = new Set()
  for (let i = 0; i < n; i++) {
    const root = uf.findRoot(i)
    disjointSets.add(root)
  }
  return disjointSets.size - 1
}
