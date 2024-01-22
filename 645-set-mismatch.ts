function findErrorNums(nums: number[]): [number, number] {
  const n = nums.length
  const counts = Array(n + 1).fill(0)

  for (const num of nums) {
    counts[num]++
  }

  let duplicate = 0
  let missing = 0

  for (let i = 1; i < counts.length; i++) {
    switch (counts[i]) {
      case 0:
        missing = i + 1
        break
      case 2:
        duplicate = i + 1
        break
    }
  }

  return [duplicate, missing]
}
