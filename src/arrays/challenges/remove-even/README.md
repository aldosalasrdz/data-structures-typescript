# Challenge: Remove Even Integers From an Array

## Problem Statement

Implement a function `removeEven(arr)`, which takes an array `arr` in its input and removes all the even elements from a given array.

### Input

An array with random integers.

### Output

An array with only even integers.

### Sample Input

```
[1, 2, 4, 5, 10, 6, 3]
```

### Sample Output

```
[1, 5, 3]
```

## Solution

<details>
<summary>View solution</summary>

```ts
// Time complexity: O(n)
function removeEven(arr: number[]): number[] {
  return arr.filter((num) => num % 2 !== 0);
}
```

</details>
