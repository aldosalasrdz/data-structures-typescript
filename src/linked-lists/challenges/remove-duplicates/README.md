# Challenge: Remove Duplicates from Linked List

## Problem Statement

Remove any node that is a duplicate of an already existing node.

### Input

A linked lists.

### Output

A list with all the duplicates removed.

### Sample Input

```
LinkedList = 1 -> 2 -> 2 -> 2 -> 3 -> 4 -> 4 -> 5 -> 6
```

### Sample Output

```
LinkedList = 1 -> 2 -> 3 -> 4 -> 5 -> 6
```

## Solution

<details>
<summary>View solution</summary>

```ts
// Time complexity: O(n)
function removeDuplicates<T>(list: SinglyLinkedList<T>) {
  let current = list.head;
  let previous = null;

  const visited = new Map<T, boolean>();

  while (current !== null) {
    if (visited.has(current.data)) {
      if (previous !== null) {
        previous.next = current.next;
      } else {
        list.head = current.next;
      }
    } else {
      visited.set(current.data, true);
      previous = current;
    }
    current = current.next;
  }

  return list;
}
```

</details>
