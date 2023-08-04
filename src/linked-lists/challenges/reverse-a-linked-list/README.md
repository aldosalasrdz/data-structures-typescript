# Challenge: Reverse a Linked List

## Problem Statement

You have to write the `reverse` function, which takes a singly linked list and reverses that list in place.

### Input

A singly linked list.

### Output

The reversed linked list.

### Sample Input

```
LinkedList = 0 -> 1 -> 2 -> 3 -> 4
```

### Sample Output

```
LinkedList = 4 -> 3 -> 2 -> 1 -> 0
```

## Solution

```ts
// Time complexity: O(n)
function reverse<T>(list: SinglyLinkedList<T>) {
  let previousNode = null;
  let currentNode = list.head;
  let nextNode = null;

  while (currentNode !== null) {
    nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }

  list.head = previousNode;
}
```
