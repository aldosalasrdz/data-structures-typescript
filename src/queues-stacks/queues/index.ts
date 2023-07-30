import { Queue } from "./Queue";

const queue = new Queue<number>();

console.log("Queue size: ", queue.size());
console.log("Queue is empty?", queue.isEmpty());
console.log("Front item", queue.getFront());

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Queue size: ", queue.size());
console.log("Queue is empty?", queue.isEmpty());
console.log("Front item", queue.getFront());

queue.dequeue();
queue.dequeue();

console.log("Queue size: ", queue.size());
console.log("Queue is empty?", queue.isEmpty());
console.log("Front item", queue.getFront());
