// Time complexity: O(n)
// Space complexity: O(1)
function rob(nums: number[]): number {
  let a = 0
  let b = 0
  for (const num of nums) {
    const next = Math.max(num + a, b)
    a = b
    b = next
  }
  return b
}

/*

  [a] => a
  [a,b] => max(a,b)
  [a,b,c] => max(a + c, b)
  [a,b,c,d] => max(a + c, b + d)
  [a,b,c,d,e] => max(a + c + e, a + d, b + d, b + e)

  [1,2,3,1]
  [1,0,0,0]
  [1,2,0,0]
  [1,2,4,4]
  
  [2,7,9,3,1]
  [2,7,11,11,12]

 */
