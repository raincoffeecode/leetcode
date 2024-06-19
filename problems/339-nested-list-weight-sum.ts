/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * class NestedInteger {
 *     If value is provided, then it holds a single integer
 *     Otherwise it holds an empty nested list
 *     constructor(value?: number) {
 *         ...
 *     };
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     isInteger(): boolean {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     getInteger(): number | null {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     setInteger(value: number) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     add(elem: NestedInteger) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds,
 *     or an empty list if this NestedInteger holds a single integer
 *     getList(): NestedInteger[] {
 *         ...
 *     };
 * };
 */

// A stub of NestedInteger to make TypeScript happy.
class NestedInteger {
  isInteger(): boolean {
    return false
  }

  getInteger(): number | null {
    return null
  }

  getList(): NestedInteger[] {
    return []
  }
}

// Recursive solution.
function depthSumRecursive(
  nestedList: NestedInteger[] | NestedInteger,
  depth: number = 1
): number {
  const isArray = Array.isArray(nestedList)

  if (!isArray && nestedList.isInteger()) {
    return depth * nestedList.getInteger()!
  }

  const nextDepth = isArray ? depth : depth + 1
  const list = isArray ? nestedList : nestedList.getList()
  return list.reduce((acc, cur) => acc + depthSum(cur, nextDepth), 0)
}

// Iterative solution.
function depthSum(nestedList: NestedInteger[]): number {
  let sum = 0
  let depth = 1
  let cur = nestedList
  let next: NestedInteger[] = []

  while (cur.length) {
    while (cur.length) {
      const node = cur.shift()!
      if (node.isInteger()) {
        sum += depth * node.getInteger()!
      } else {
        next.push(...node.getList())
      }
    }

    cur = next
    next = []
    depth++
  }

  return sum
}
