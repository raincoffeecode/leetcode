/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/* ---------------------------------------------------------------------------------- */
// O(n) initialization, O(1) random lookup. Uses O(n) memory.
//
// class Solution {
//   private head: ListNode | null
//   private numbers: number[] = []

//   constructor(head: ListNode | null) {
//     this.head = head
//     let node = head
//     while (node) {
//       this.numbers.push(node.val)
//       node = node.next
//     }
//   }

//   getRandom(): number {
//     const { numbers } = this
//     if (!numbers.length) {
//       throw new Error("Empty list.")
//     }
//     const index = Math.floor(Math.random() * numbers.length)
//     return numbers[index]
//   }
// }

/* ---------------------------------------------------------------------------------- */
// Resevoir Sampling
// O(1) initialization, O(n) random lookup. Uses O(1) memory.
class Solution {
  private head: ListNode

  constructor(head: ListNode) {
    this.head = head
  }

  getRandom(): number {
    let value = this.head.val
    let node = this.head.next
    let k = 2
    while (node) {
      if (Math.random() < 1 / k) {
        value = node.val
      }
      node = node.next
      k++
    }
    return value
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */
