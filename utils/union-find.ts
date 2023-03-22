// Based on https://leetcode.com/explore/learn/card/graph/618/disjoint-set/3843/
// Optimized "disjoint set" with path compression and union by rank.
// Path compression: update intermediate nodes to all point to root for each find.
// Union by rank: use height of sets to determine which

export default class UnionFind {
  readonly size: number
  private roots: number[]
  private ranks: number[]

  constructor(size: number) {
    this.size = size
    this.roots = [...Array(size).keys()]
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

  private findRoot(index: number): number {
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
