function climbStairs(n: number): number {
  let prev = 0
  let cur = 1
  for (let i = 0; i < n; i++) {
    let temp = cur
    cur += prev
    prev = temp
  }
  return cur
}
