export {}

function tribonacciIterative(n: number): number {
  switch (n) {
    case 0:
      return 0
    case 1:
    case 2:
      return 1
    default:
      let a = 1
      let b = 1
      let c = 2
      for (let i = 3; i < n; i++) {
        let temp = a + b + c
        a = b
        b = c
        c = temp
      }
      return c
  }
}

// Recursive solution.
const memo = new Map<number, number>()
memo.set(0, 0)
memo.set(1, 1)
memo.set(2, 1)

function tribonacci(n: number): number {
  if (memo.has(n)) {
    return memo.get(n)!
  }
  switch (n) {
    case 0:
      return 0
    case 1:
    case 2:
      return 1
    default:
      const value = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3)
      memo.set(n, value)
      return value
  }
}
