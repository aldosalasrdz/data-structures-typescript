# Challenge: Find Middle Node of Linked List

## Problem Statement

You have to implement the `findMid()` function, which will take a linked list as an input and return the middle node. If the length of the list is even, the middle value will occur at `length / 2`. For a list of odd length, the middle value will be `(length / 2) + 1`.

### Input

A singly linked list.

### Output

The middle node.

### Sample Input

```
LinkedList = 7 -> 14 -> 10 -> 21
```

### Sample Output

```
14
```

## Solution

<details>
<summary>View solution</summary>

```ts
// Time complexity: O(n)
function findMid<T>(list: SinglyLinkedList<T>) {
  let slowerNode = list.head;
  let fasterNode = list.head;

  if (slowerNode === null || fasterNode === null) return "Empty list";

  if (slowerNode.next === null) {
    return slowerNode;
  }

  while (
    slowerNode != null &&
    fasterNode.next != null &&
    fasterNode.next.next != null
  ) {
    slowerNode = slowerNode.next;
    fasterNode = fasterNode.next.next;
  }

  return slowerNode;
}
```

</details>
