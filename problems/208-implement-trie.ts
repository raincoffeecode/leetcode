class TrieNode {
  children: (TrieNode | undefined)[] = Array(26)
  isTerminator: boolean = false
}

const CHAR_INDEX: { [index: string]: number } = "abcdefghijklmnopqrstuvwxyz"
  .split("")
  .reduce((acc, char, i) => ({ ...acc, [char]: i }), {})

class Trie {
  root: TrieNode = new TrieNode()

  insert(word: string): void {
    let node = this.root
    for (const char of word) {
      const index = CHAR_INDEX[char]
      if (!node.children[index]) {
        node.children[index] = new TrieNode()
      }
      node = node.children[index]!
    }
    node.isTerminator = true
  }

  search(word: string): boolean {
    let node = this.root
    for (const char of word) {
      const index = CHAR_INDEX[char]
      if (!node.children[index]) {
        return false
      }
      node = node.children[index]!
    }
    return node.isTerminator
  }

  startsWith(prefix: string): boolean {
    let node = this.root
    for (const char of prefix) {
      const index = CHAR_INDEX[char]
      if (!node.children[index]) {
        return false
      }
      node = node.children[index]!
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
