import { Stack } from "../../stacks/Stack";

class NewQueue<T> {
  constructor(public stack: Stack<T>) { }

  enqueue(value: T) {
    this.stack.push(value);
  }

  // dequeue() {
  //   this.
  // }
}
