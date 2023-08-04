# Challenge: Detect Loop in a Linked List

## Problem Statement

By definition, a loop is formed when a node in your linked list points to a previously traversed node.

You must implement the `detectLoop()` function, which will take a linked list as input and deduce whether or not a loop is present.

### Input

A singly linked list.

### Output

Returns `true` if the given linked list contains a loop. Otherwise, it returns `false`.

### Sample Input

```
LinkedList = 7 -> 14 -> 21 -> 7 // Both '7's are the same node. Not duplicates.
```

### Sample Output

```
true
```

## Solution

<details>
<summary>View solution</summary>

```ts
// Time complexity: O(n)
function detectLoop<T>(list: SinglyLinkedList<T>) {
  let slowerNode = list.head;
  let fasterNode = list.head;

  if (list.head === null) {
    return false;
  }

  while (
    slowerNode !== null &&
    fasterNode !== null &&
    fasterNode.next !== null
  ) {
    slowerNode = slowerNode.next;
    fasterNode = fasterNode.next.next;

    if (slowerNode === fasterNode) {
      return true;
    }
  }

  return false;
}
```

</details>
