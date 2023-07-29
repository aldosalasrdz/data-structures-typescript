import { Queue } from "../../Queue";

function findBin(num: number) {
  const queue = new Queue<number>();

  for (let i = 1; i <= num; i++) {
    const binaryNumber = Number(i.toString(2));
    queue.enqueue(binaryNumber);
  }

  return queue.items.toString();
}

console.log(findBin(10));
