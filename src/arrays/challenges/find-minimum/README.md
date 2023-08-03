# Challenge: Find Minimum Value in Array

## Problem Statement

Implement a function `findMinimum(arr)` that finds the smallest number in the given array.

### Input

An array of integers.

### Output

The smallest number in the array

### Sample Input

```
arr = [9, 2, 3, 6]
```

### Sample Output

```
2
```

## Solution

```ts
// Time complexity: O(n)
function findMinimum(arr: number[]): number {
  let min = arr[0];

  for (const i of arr) {
    if (i < min) {
      min = i;
    }
  }

  return min;
}
```
