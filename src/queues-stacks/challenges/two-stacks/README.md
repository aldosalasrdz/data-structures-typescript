# Challenge: Implement Two Stacks using One Array

## Problem Statement

Write code for the following functions to implement two stacks using a single array of a fixed size to store the elements.

### Input/Output

`push1(value)`

_Input_: an integer

_Output_: inserts the given value in the first stack, i.e., stack1

`push2(value)`

_Input_: an integer

_Output_: inserts the given value in the second stack i.e., stack2

`pop1()`

_Output_: returns and remove the top value of stack1

`pop2()`

_Output_: returns and remove the top value of stack2

## Solution

<details>
<summary>View solution</summary>

```ts
class TwoStacks {
  // `s` is the maximum size that the array can have.
  public arr: number[] = [];
  public top1 = -1;
  public top2 = this.s;
  public size = this.s;
  constructor(public s: number) {}

  // Time complexity O(1)
  push1(value: number) {
    if (this.top1 < this.top2 - 1) {
      this.top1 += 1;
      this.arr[this.top1] = value;
    }
  }

  // Time complexity O(1)
  push2(value: number) {
    if (this.top1 < this.top2 - 1) {
      this.top2 -= 1;
      this.arr[this.top2] = value;
    }
  }

  // Time complexity O(1)
  pop1() {
    if (this.top1 < 0) {
      return -1;
    } else {
      const value = this.arr[this.top1];
      this.top1 -= 1;
      return value;
    }
  }

  // Time complexity O(1)
  pop2() {
    if (this.top2 > this.size) {
      return -1;
    } else {
      const value = this.arr[this.top2];
      this.top2 += 1;
      return value;
    }
  }
}
```

</details>
