/**

[1, 1, 1]

[1]
[1, 0]
[1, 0, -1]

[1,2,2,x], k = 6

6, 5, 3, 1, 


[4, 2]
[]



*/

// O(n^2) brute force.
function subarraySumBruteForce(nums: number[], k: number): number {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum === k) {
        count++
      }
    }
  }
  return count
}

// O(n).
function subarraySum(nums: number[], k: number): number {
  const n = nums.length
  const map = new Map([[0, 1]])
  let count = 0
  let sum = 0
  for (const num of nums) {
    sum += num
    if (map.has(sum - k)) {
      count += map.get(sum - k)!
    }
    map.set(sum, (map.get(sum) ?? 0) + 1)
  }
  return count
}
