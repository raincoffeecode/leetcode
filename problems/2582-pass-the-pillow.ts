/* 
1  2  3
n - 1 to go from start to end
n - 1 to go from end to start
2 (n-1) to do a full iteration
can determine if forward or backward traversing based on / (n-1) is even or odd.
even is forward, odd is backwards
can also map each index from 0 to 2(n - 1) - 1
if value is less than half way point return directly, otherwise calculate how far back
it's come

n: 4
1  2  3  4
0  1  2  3
   5  4

(2 * (n - 1)): 6
(2 * (n - 1)) - offset
*/

function passThePillow(n: number, time: number) {
  const offset = time % (2 * (n - 1))
  const index = offset < n ? offset : 2 * (n - 1) - offset
  return index + 1
}
