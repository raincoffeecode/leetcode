function sortArray(nums: number[]): number[] {
  return mergeSort(nums)
}

function mergeSort(nums: number[], left?: number, right?: number): number[] {
  left = left ?? 0
  right = right ?? nums.length - 1

  if (left >= right) {
    return [nums[left]]
  }
  const mid = left + Math.floor((right - left) / 2)
  const leftNums = mergeSort(nums, left, mid)
  const rightNums = mergeSort(nums, mid + 1, right)
  return merge(leftNums, rightNums)
}

function merge(leftNums: number[], rightNums: number[]): number[] {
  const merged = []
  let a = 0
  let b = 0
  while (a < leftNums.length || b < rightNums.length) {
    if (a >= leftNums.length) {
      merged.push(...rightNums.slice(b))
      break
    }
    if (b >= rightNums.length) {
      merged.push(...leftNums.slice(a))
      break
    }
    if (leftNums[a] <= rightNums[b]) {
      merged.push(leftNums[a])
      a += 1
    } else {
      merged.push(rightNums[b])
      b += 1
    }
  }
  return merged
}

console.log(sortArray([5, 2, 3, 1]))
