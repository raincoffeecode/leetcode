// Solution that utilizes a lookup table. Requires more memory but is O(n) runtime.
function minOperations(nums: number[]): number {
  const counts = new Map<number, number>()
  for (const num of nums) {
    const count = counts.get(num) ?? 0
    counts.set(num, count + 1)
  }
  let operations = 0
  for (const count of counts.values()) {
    if (count === 1) {
      return -1
    }
    switch (count % 3) {
      case 0:
        operations += Math.floor(count / 3)
        break
      case 1:
      case 2:
        operations += Math.floor(count / 3) + 1
    }
  }
  return operations
}

console.log(minOperations([2, 3, 3, 2, 2, 4, 2, 3, 4]))

// Solution where we sort the input first. Requires no memory overhead but longer
// runtime.
function minOperationsSort(nums: number[]): number {
  nums.sort((a, b) => a - b)
  let operations = 0
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    count++
    const current = nums[i]
    const next = i <= nums.length - 2 ? nums[i + 1] : undefined
    if (current !== next) {
      if (count === 1) {
        return -1
      }

      switch (count % 3) {
        case 0:
          operations += Math.floor(count / 3)
          break
        case 1:
          operations += Math.floor(count / 3) + 1
          break
        case 2:
          operations += Math.floor(count / 3) + 1
          break
      }

      count = 0
    }
  }
  return operations
}
