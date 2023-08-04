# Challenge: Intersection of Linked Lists

## Problem Statement

Given two lists **A** and **B**, the intersection is the largest list, which contains all the elements that are common to both the sets.

### Input

Two linked lists.

### Output

A list containing the intersection of the two lists.

### Sample Input

```
list1 = 10 -> 20 -> 80 -> 60
list2 = 15 -> 20 -> 30 -> 60 -> 45
```

### Sample Output

```
20 -> 60
```

## Solution

<details>
<summary>View solution</summary>

```ts
// Time complexity: O(n + m + p)
// n = list1 elements
// m = list2 elements
// p = list1 and list2 common elements
function intersection<T>(
  list1: SinglyLinkedList<T>,
  list2: SinglyLinkedList<T>,
) {
  const newList = new SinglyLinkedList();
  const visited = new Set<T>();
  const commonElements = [];

  let list1Head = list1.head;
  let list2Head = list2.head;

  while (list1Head) {
    visited.add(list1Head.data);
    list1Head = list1Head.next;
  }

  while (list2Head) {
    if (visited.has(list2Head.data)) {
      commonElements.push(list2Head.data);
    }
    list2Head = list2Head.next;
  }

  for (const element of commonElements) {
    newList.insertAtTail(element);
  }

  return newList;
}
```

</details>
