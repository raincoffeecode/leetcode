// Union Find i.e. Disjoint Set.
// Optimized with union by rank and path compression.
// Union by rank: Use height of sets to determine which to use as root. Use larger
// height as root to minimize overall heights.
// Path compression: Update intermediate nodes to all point to root for each `findRoot`
// and `connected` call.
// For this implementation, the total set size must be known at initilization but this
// is not necessarily the true for all Union Find implemntations.
// Based on https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3843/

export default class UnionFind {
  readonly size: number
  private roots: number[]
  private ranks: number[]

  constructor(size: number) {
    if (size <= 0) {
      throw new Error("Invalid size.")
    }
    this.size = size
    this.roots = Array.from({ length: size }, (_, k) => k)
    this.ranks = Array(size).fill(1)
  }

  union(a: number, b: number): void {
    const { size, roots, ranks } = this
    if (a < 0 || a >= size || b < 0 || b >= size) {
      throw new Error("Invalid input. `a` and/or `b` out of range.")
    }
    const rootA = this.findRoot(a)
    const rootB = this.findRoot(b)
    const rankA = ranks[rootA]
    const rankB = ranks[rootB]
    if (rankA < rankB) {
      roots[rootA] = rootB
    } else if (rankA > rankB) {
      roots[rootB] = rootA
    } else {
      roots[rootB] = rootA
      ranks[rootA] += 1
    }
  }

  connected(a: number, b: number): boolean {
    const { size } = this
    if (a < 0 || a >= size || b < 0 || b >= size) {
      throw new Error("Invalid input. `a` and/or `b` out of range.")
    }
    const rootA = this.findRoot(a)
    const rootB = this.findRoot(b)
    return rootA === rootB
  }

  findRoot(index: number): number {
    const { roots } = this
    if (index === roots[index]) {
      return index
    }
    const parent = roots[index]
    const newRoot = this.findRoot(parent)
    roots[index] = newRoot
    return newRoot
  }
}
