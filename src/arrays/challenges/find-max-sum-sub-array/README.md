# Challenge: Maximum Sum Subarray

## Problem Statement

Given an integer array, return the maximum subarray sum. The array may contain both positive and negative integers and is unsorted.

### Input

An array `A`.

### Output

A number (maximum subarray sum).

### Sample Input

```
[-4, 2, -5, 1, 2, 3, 6, -5, 1]
```

### Sample Output

```
largest_sum = 12
```

## Solution

```ts
// Time complexity: O(n)
function findMaxSumSubArray(array: number[]) {
  if (array.length < 1) {
    return 0;
  }

  let currMax = array[0];
  let globalMax = array[0];

  for (let i = 1; i < array.length; i++) {
    if (currMax < 0) {
      currMax = array[i];
    } else {
      currMax += array[i];
    }

    if (globalMax < currMax) {
      globalMax = currMax;
    }
  }
  return globalMax;
};
```
