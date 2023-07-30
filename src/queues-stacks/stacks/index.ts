import { Stack } from "./Stack";

const myStack = new Stack<number>();

for (let i = 0; i < 10; i++) {
  const randomNumber = Math.floor(Math.random() * 100);
  myStack.push(randomNumber);
}

console.log(myStack.items);

console.log("Top:", myStack.getTop());
console.log("Size:", myStack.size());

console.log(myStack.pop());

console.log(myStack.items);

console.log("Top:", myStack.getTop());
console.log("Size:", myStack.size());
