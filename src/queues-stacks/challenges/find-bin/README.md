# Challenge: Generate Binary Numbers From 1 to n Using Queue 

## Problem Statement

Implement a function `findBin(n)`, which will generate binary numbers from 1 to _n_ in the form of a string using a queue.

### Input

A positive integer _n_.

### Output

Returns binary numbers in the form of strings from 1 up to _n_.

### Sample Input

```
n = 3
```

### Sample Output

```
result = ["1","10","11"]
```

## Solution

<details>
<summary>View solution</summary>

```ts
// Time complexity: O(n)
function findBin(num: number) {
  const queue = new Queue<number>();

  for (let i = 1; i <= num; i++) {
    const binaryNumber = Number(i.toString(2));
    queue.enqueue(binaryNumber);
  }

  return queue.items.toString();
}
```

</details>
