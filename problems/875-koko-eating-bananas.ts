// n: piles of bananas, k: bananas per hour eating speed, h: number of hours
// can only eat 1 pile per hour
// each hour, can eat up to k bananas from a pile
// best case,
// number of hours must be greater than n, otherwise not possible
// upper bound for k is max(piles), any higher does not improve speed.
// Can do binary search on k from 1 to m where m is max(pile) n * log m
// each pile requires Math.ceil(pile[i] / k) hours
function minEatingSpeed(piles: number[], h: number): number {
  const n = piles.length
  if (n <= 0 || h < n) {
    throw new Error("Invalid input.")
  }

  let left = 1
  let right = Math.max(...piles)

  while (left < right) {
    const mid = Math.floor((left + right) / 2)
    if (canEat(mid, piles, h)) {
      right = mid
    } else {
      left = mid + 1
    }
  }

  return left
}

function canEat(k: number, piles: number[], h: number): boolean {
  let requiredHours = 0
  for (const pile of piles) {
    requiredHours += Math.ceil(pile / k)
  }
  return h >= requiredHours
}
