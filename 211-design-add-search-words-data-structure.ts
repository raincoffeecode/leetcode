class WordDictionary {
  root: TrieNode = new TrieNode()

  addWord(word: string): void {
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
    let cursors = [this.root]
    for (const char of word) {
      if (!cursors.length) {
        return false
      }
      const nextCursors: TrieNode[] = []
      for (const cursor of cursors) {
        if (char === ".") {
          for (const node of cursor.children) {
            if (node) {
              nextCursors.push(node)
            }
          }
        } else {
          const index = CHAR_INDEX[char]
          if (cursor.children[index]) {
            nextCursors.push(cursor.children[index]!)
          }
        }
      }
      cursors = nextCursors
    }
    return !!cursors.find((c) => c.isTerminator)
  }
}
