class TwoStacks {
  // `s` is the maximum size that the array can have.
  public arr: number[] = [];
  public top1 = -1;
  public top2 = this.s;
  public size = this.s;
  constructor(public s: number) {}

  push1(value: number) {
    if (this.top1 < this.top2 - 1) {
      this.top1 += 1;
      this.arr[this.top1] = value;
    }
  }

  push2(value: number) {
    if (this.top1 < this.top2 - 1) {
      this.top2 -= 1;
      this.arr[this.top2] = value;
    }
  }

  pop1() {
    if (this.top1 < 0) {
      return -1;
    } else {
      const value = this.arr[this.top1];
      this.top1 -= 1;
      return value;
    }
  }

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

const stack = new TwoStacks(8);

stack.push1(6);
stack.push1(3);
stack.push1(2);

stack.push2(4);
stack.push2(5);

stack.push1(9);

stack.push2(8);
stack.push2(1);
stack.push2(6);

stack.pop1();

stack.pop2();
stack.pop2();

console.log("Stack 1");
for (let i = 0; i < stack.top1 + 1; i++) {
  console.log(stack.arr[i]);
}

console.log("\nStack 2");
for (let i = stack.top2; i < stack.size; i++) {
  console.log(stack.arr[i]);
}
