import { Queue } from "../../queues/Queue";
import { Stack } from "../../stacks/Stack";

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

const queue = new Queue();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
queue.enqueue(5);
queue.enqueue(6);
queue.enqueue(7);
queue.enqueue(8);
queue.enqueue(9);
queue.enqueue(10);

console.log(reverseK(queue, 4));
