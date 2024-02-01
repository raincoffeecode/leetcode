function sumSubarrayMins(nums: number[]): number {
  const MOD_VALUE = Math.pow(10, 9) + 7
  const n = nums.length
  const stack: number[] = []
  let sum = 0

  for (let i = 0; i <= n; i++) {
    while (stack.length && (i === n || nums[stack.at(-1)!] >= nums[i])) {
      const mid = stack.pop()!
      const leftBoundary = stack.at(-1) ?? -1
      const rightBoundary = i
      const count = ((mid - leftBoundary) * (rightBoundary - mid)) % MOD_VALUE
      sum += (count * nums[mid]) % MOD_VALUE
      sum %= MOD_VALUE
    }
    stack.push(i)
  }

  return sum
}

// This was my initial O(n^2) attempt that timed out. I referenced the solution for the
// above code.
function sumSubarrayMinsTimeOut(nums: number[]): number {
  const MOD_VALUE = Math.pow(10, 9) + 7
  const n = nums.length
  let sum = 0

  for (let i = 0; i < n; i++) {
    let min = nums[i]
    sum = (sum + min) % MOD_VALUE

    for (let j = i + 1; j < n; j++) {
      min = Math.min(min, nums[j])
      sum = (sum + min) % MOD_VALUE
    }
  }

  return sum
}

/*
  [a] => a
  [b] => b
  [a,b] => [a], [b], [a,b] => a + b + min(a,b) => memo(a) + memo(b) + min(a,b)
  [b,c] => [b], [c], [b,c] => b + c + min(b,c) => memo(b) + memo(c) + min(b,c)
  [a,b,c] => [a], [b], [a,b], [c], [b,c], [a,b,c] => a + b + min(a,b) + c + min(b,c) + min(a,b,c)
            => memo(a,b) + memo(b,c) - b + min(a,b,c)
  */
