# Challenge: Implement a Queue Using Stacks

## Problem Statement

You have to implement the `enqueue()` and `dequeue()` functions using the `myStack` class we created earlier. `enqueue()` will insert a value into the queue, and `dequeue()` will remove a value from the queue.

### Input

- enqueue(): A value to insert into the queue.

- dequeue(): Does not require inputs.

### Output

- enqueue(): Returns True after inserting the value into the queue.

- dequeue(): Pops out and returns the oldest value in the queue.


### Sample Input

```
value = 5 
// [1, 2, 3, 4] existing queue front:1 back:4
enqueue(value)
dequeue()
```

### Sample Output

```
True // [1, 2, 3, 4, 5]
1 // [2, 3, 4, 5]
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
