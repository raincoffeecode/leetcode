class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

// O(n) solution.
function removeZeroSumSublists(head: ListNode | null): ListNode | null {
  const nums: number[] = []

  // Convert linked list to array.
  let cur = head
  while (cur) {
    nums.push(cur.val)
    cur = cur.next
  }

  // Map to store current sequence sums to corresponding indexes.
  const sums = new Map<number, number>([[0, -1]])

  // Track nodes that have been marked for removal.
  const removed = new Map<number, boolean>()

  let sum = 0

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]

    if (num === 0) {
      removed.set(i, true)
    } else {
      sum += num
      const sumPrevIndex = sums.get(sum)
      const hasPrevIndex =
        sumPrevIndex !== undefined && !removed.has(sumPrevIndex)

      if (hasPrevIndex) {
        for (let j = sumPrevIndex + 1; j <= i; j++) {
          removed.set(j, true)
        }
      } else {
        sums.set(sum, i)
      }
    }
  }

  let updatedHead: ListNode | null = null
  let prev: ListNode | null = null
  cur = head

  for (let i = 0; i < nums.length; i++) {
    if (!removed.has(i)) {
      if (prev) {
        prev.next = cur
      } else if (!updatedHead) {
        updatedHead = cur
      }
      prev = cur
    }
    cur = cur?.next ?? null
  }

  if (prev) {
    prev.next = null
  }

  return updatedHead
}

// O(n^2) solution. Not as efficient but still ranked 100th percentile for TypeScript
// solutions.
function removeZeroSumSublists2(head: ListNode | null): ListNode | null {
  // Convert linked list into an array.
  const nums: number[] = []
  let cur = head
  while (cur) {
    nums.push(cur.val)
    cur = cur.next
  }

  let i = 0

  while (i < nums.length) {
    let sum = 0
    for (let j = i; j < nums.length; j++) {
      sum += nums[j]
      if (sum === 0) {
        nums.splice(i, j - i + 1)
        i = Math.max(0, i - 1) - 1
        break
      }
    }
    i++
  }

  cur = head
  let updatedHead: ListNode | null = null
  let prev: ListNode | null = null
  let curIndex = 0

  // Walk the original linked list and update references to account for removed nodes.
  while (cur && curIndex < nums.length) {
    if (cur.val === nums[curIndex]) {
      if (!updatedHead) {
        updatedHead = cur
      }
      if (prev) {
        prev.next = cur
      }
      prev = cur
      curIndex++
    }
    cur = cur.next
  }

  if (prev) {
    prev.next = null
  }

  return updatedHead
}

export {}

const n2 = new ListNode(-1)
const n1 = new ListNode(1, n2)

removeZeroSumSublists(n1)
