# Challenge: Reversing First k Elements of Queue

## Problem Statement

Implement the function `reverseK(queue, k)`, which takes a queue and a number “k” as input and reverses the first “k” elements of the queue.

### Input

A queue and an integer `k` such that 0 <= `k` <= size of the queue.

### Output

Queue with the first `k` elements reversed.

### Sample Input

```
Queue = [1,2,3,4,5,6,7,8,9,10]    k = 5
```

### Sample Output

```
result = [5,4,3,2,1,6,7,8,9,10]
```

## Solution

<details>
<summary>View solution</summary>

```ts
// Time complexity: O(n)
function reverseK<T>(queue: Queue<T>, k: number) {
  const stack = new Stack();
  const remainingElements = [];
  let position = 0;

  let current = queue.items.head;

  while (current !== null) {
    if (position < k) {
      stack.push(current.data);
    } else {
      remainingElements.push(current.data);
    }
    position++;
    current = current.next;
  }

  stack.items.reverse();

  const result = stack.items.concat(remainingElements);

  return result.toString();
}
```

</details>
