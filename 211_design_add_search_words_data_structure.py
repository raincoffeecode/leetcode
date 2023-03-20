from __future__ import annotations


class TrieNode:
    children: list[TrieNode | None]
    isEnd: bool

    def __init__(self):
        self.children = [None] * 26
        self.isEnd = False


class WordDictionary:
    root: TrieNode
    char_indexes = {char: i for i, char in enumerate("abcdefghijklmnopqrstuvwxyz")}

    def __init__(self):
        self.root = TrieNode()

    def addWord(self, word: str) -> None:
        node = self.root
        for char in word:
            index = self.char_indexes[char]
            if node.children[index] is None:
                node.children[index] = TrieNode()
            node = node.children[index]
        node.isEnd = True

    def search(self, word: str) -> bool:
        cursors = [self.root]
        for char in word:
            next_cursors = []

            for cursor in cursors:
                if char == ".":
                    for node in cursor.children:
                        if node:
                            next_cursors.append(node)
                else:
                    index = self.char_indexes[char]
                    if cursor.children[index]:
                        next_cursors.append(cursor.children[index])

            if not next_cursors:
                return False

            cursors = next_cursors

        matching_cursor = next((c for c in cursors if c.isEnd), None)
        if matching_cursor:
            return True
        else:
            return False
