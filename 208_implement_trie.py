from __future__ import annotations


class TrieNode:
    children: list[TrieNode | None]
    isEnd: bool

    def __init__(self):
        self.children = [None] * 26
        self.isEnd = False


class Trie:
    root: TrieNode

    def __init__(self) -> None:
        self.root = TrieNode()

    def insert(self, word: str) -> None:
        node = self.root
        for char in word:
            index = ord(char) - ord("a")
            if node.children[index] is None:
                node.children[index] = TrieNode()
            node = node.children[index]
        node.isEnd = True

    def search(self, word: str) -> bool:
        node = self.root
        for char in word:
            index = ord(char) - ord("a")
            if node.children[index] is None:
                return False
            node = node.children[index]
        return node.isEnd

    def startsWith(self, prefix: str) -> bool:
        node = self.root
        for char in prefix:
            index = ord(char) - ord("a")
            if node.children[index] is None:
                return False
            node = node.children[index]
        return True
