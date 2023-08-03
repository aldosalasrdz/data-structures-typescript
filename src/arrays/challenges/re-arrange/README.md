# Challenge: Rearrange Positive & Negative Values

## Problem Statement

Implement a function, `reArrange(arr)`, which sorts the elements so that all the negative elements appear on the left, and all positive elements appear at the right.

> While zero is NOT positive or negative, we consider zero to be a positive integer for this challenge!

### Input

An array containing positive and negative elements.

### Output

A sorted array with negative elements at the left and positive elements at the right.

### Sample Input

```
[10, -1, 20, 4, 5, -9, -6]
```

### Sample Output

```
[-1,-9,-6,10,20,4,5]
```

## Solution

```ts
// Time complexity: O(n)
function reArrange(arr: number[]): number[] {
  let leftMostPosEl = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      if (i !== leftMostPosEl) {
        const temp = arr[i];
        arr[i] = arr[leftMostPosEl];
        arr[leftMostPosEl] = temp;
      }
      leftMostPosEl++;
    }
  }

  return arr;
}
```
