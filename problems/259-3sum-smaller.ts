// O(n^2) solution using 2 pointers.
function threeSumSmaller(nums: number[], target: number): number {
  const n = nums.length
  let count = 0

  nums.sort((a, b) => a - b)

  for (let i = 0; i < n - 2; i++) {
    let j = i + 1
    let k = n - 1

    while (j < k) {
      const sum = nums[i] + nums[j] + nums[k]
      if (sum >= target) {
        k--
      } else {
        count += k - j
        j++
      }
    }
  }

  return count
}

threeSumSmaller([1, 1, 1, 1], 4)
