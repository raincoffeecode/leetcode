class WordDictionary {
  root: TrieNode = new TrieNode()
  cache: { [index: string]: boolean } = {}

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
    this.cache[word] = true
  }

  search(word: string): boolean {
    if (this.cache[word]) {
      return true
    }
    let cursors = [this.root]
    for (const char of word) {
      if (char === ".") {
        cursors = cursors.reduce<TrieNode[]>((acc, cur) => {
          const validNodes = cur.children.filter((c) => !!c) as TrieNode[]
          return [...acc, ...validNodes]
        }, [])
      } else {
        const index = CHAR_INDEX[char]
        cursors = cursors
          .map((cursor) => cursor.children[index])
          .filter((cursor) => !!cursor) as TrieNode[]
      }
    }
    const isMatching = !!cursors.find((c) => c.isTerminator)
    if (isMatching) {
      this.cache[word] = true
    }
    return isMatching
  }
}
