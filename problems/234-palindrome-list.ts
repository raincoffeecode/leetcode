class ListNode {
  val: number
  next: ListNode | null

  constructor(val: number = 0, next: ListNode | null = null) {
    this.val = val
    this.next = next
  }
}

function isPalindrome(head: ListNode | null): boolean {
  let s = ""
  let cur = head
  while (cur) {
    s += `${cur.val}`
    cur = cur.next
  }

  const n = s.length

  for (let i = 0; i < n / 2; i++) {
    if (s[i] !== s[n - 1 - i]) {
      return false
    }
  }

  return true
}

export {}
