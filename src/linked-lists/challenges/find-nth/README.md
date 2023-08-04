# Challenge: Return the Nth Node from the End

## Problem Statement

In the `findNth` function, a certain N is specified as an argument. You simply need to return the node itself (not the value of the node), which is N spaces away from the end of the linked list.

### Input

A linked list and a position _n_.

### Output

The value of the node _n_ positions from the end. Returns `null` if _n_ is out of bound.

### Sample Input

```
LinkedList = 22 -> 17 -> 60 -> 78 -> 47 -> 39 -> 99 and n = 3
```

### Sample Output

```
47
```

## Solution

<details>
<summary>View solution</summary>

```ts
// Time complexity: O(n)
function findNth<T>(list: SinglyLinkedList<T>, n: number) {
  let head = list.head;
  let temp = null;
  let length = 0;

  if (head === null) {
    return null;
  }

  while (head !== null) {
    head = head.next;
    length++;
  }

  const nthNodePos = length - n;

  if (nthNodePos < 0 || nthNodePos > length) {
    return null;
  }

  temp = list.head;
  for (let i = 0; i < nthNodePos; i++) {
    temp = temp?.next;
  }

  return temp;
}
```

</details>
