function findKthPositive(arr: number[], k: number): number {
  if (!arr.length || k <= 0) {
    throw new Error("Invalid input.")
  }
  let next = 1
  for (const num of arr) {
    if (num >= next) {
      if (num - next >= k) {
        break
      }
      k -= num - next
      next = num + 1
    } else {
      next++
    }
  }

  return next - 1 + k
}

console.log(findKthPositive([2, 3, 4, 7, 11], 5))
console.log(findKthPositive([2, 3, 4, 7, 11], 6))
console.log(findKthPositive([2, 3, 4, 7, 11], 7))
console.log(findKthPositive([2, 3, 4, 7, 11], 8))
