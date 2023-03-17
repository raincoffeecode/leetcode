class TrieNode {
  children: (TrieNode | undefined)[] = Array(26)
  isTerminator: boolean = false
}

const CHAR_INDEX: { [index: string]: number } = "abcdefghijklmnopqrstuvwxyz"
  .split("")
  .reduce((acc, char, i) => ({ ...acc, [char]: i }), {})

class Trie {
  children: (TrieNode | undefined)[] = Array(26)

  constructor() {}

  insert(word: string): void {
    let { children } = this
    for (let i = 0; i < word.length; i++) {
      let char = word[i]
      const charIndex = CHAR_INDEX[char]
      const isLast = i === word.length - 1

      if (children[charIndex] === undefined) {
        children[charIndex] = new TrieNode()
      }

      if (isLast) {
        children[charIndex]!.isTerminator = true
      }

      children = children[charIndex]!.children
    }
  }

  search(word: string): boolean {
    let { children } = this
    for (let i = 0; i < word.length; i++) {
      let char = word[i]
      const charIndex = CHAR_INDEX[char]
      const isLast = i === word.length - 1

      if (children[charIndex] === undefined) {
        return false
      }

      if (isLast) {
        return children[charIndex]!.isTerminator
      }

      children = children[charIndex]!.children
    }

    throw new Error("Invalid input.")
  }

  startsWith(prefix: string): boolean {
    let { children } = this
    for (const char of prefix) {
      const charIndex = CHAR_INDEX[char]
      if (children[charIndex] === undefined) {
        return false
      }
      children = children[charIndex]!.children
    }

    return true
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
