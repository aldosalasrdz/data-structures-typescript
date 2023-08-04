# Challenge: Union of Linked Lists

## Problem Statement

Given two lists **A** and **B**; the union is the list that contains elements or objects that belong to either A, or to B, or to both.

### Input

Two linked lists.

### Output

A list containing the union of the two lists.

### Sample Input

```
list1 = 10 -> 20 -> 80 -> 60
list2 = 15 -> 20 -> 30 -> 60 -> 45
```

### Sample Output

```
10 -> 20 -> 80 -> 60 -> 15 -> 30 -> 45
```

## Solution

<details>
<summary>View solution</summary>

```ts
// Time complexity: O(n + m)
// n = list1 elements
// m = list2 elements
function union<T>(list1: SinglyLinkedList<T>, list2: SinglyLinkedList<T>) {
  const newList = new SinglyLinkedList();

  const visited = new Map<T, boolean>();

  let list1Head = list1.head;
  let list2Head = list2.head;

  while (list1Head) {
    if (visited.has(list1Head.data)) {
      list1Head = list1Head.next;
      continue;
    } else {
      visited.set(list1Head.data, true);
      newList.insertAtTail(list1Head.data);
    }
    list1Head = list1Head.next;
  }

  while (list2Head) {
    if (visited.has(list2Head.data)) {
      list2Head = list2Head.next;
      continue;
    } else {
      visited.set(list2Head.data, true);
      newList.insertAtTail(list2Head.data);
    }
    list2Head = list2Head.next;
  }

  return newList;
}
```

</details>
