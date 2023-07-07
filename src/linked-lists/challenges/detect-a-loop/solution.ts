import { SinglyLinkedList } from "../../LinkedList";

function detectLoop<T>(list: SinglyLinkedList<T>) {
  let slowerNode = list.head;
  let fasterNode = list.head;

  if (list.head === null) {
    return false;
  }

  while (
    slowerNode !== null &&
    fasterNode !== null &&
    fasterNode.next !== null
  ) {
    slowerNode = slowerNode.next;
    fasterNode = fasterNode.next.next;

    if (slowerNode === fasterNode) {
      return true;
    }
  }

  return false;
}

const list = new SinglyLinkedList<number>();

list.insertAtHead(21);
list.insertAtHead(14);
list.insertAtHead(7);

console.log(detectLoop(list)); // false

// Create a loop
const head = list.head;
let node = list.head;

for (let i = 0; i < 4; i++) {
  if (node === null || head === null) break;
  if (node.next === null) {
    node.next = head;
    break;
  }
  node = node.next;
}

console.log(detectLoop(list)); // true
