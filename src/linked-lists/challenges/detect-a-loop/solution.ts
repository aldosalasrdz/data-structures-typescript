import { SinglyLinkedList } from "../../LinkedList";

function detectLoop<T>(list: SinglyLinkedList<T>) {
  let slow = list.head;
  let fast = list.head;

  if (list.head === null) {
    return false;
  }

  while (slow !== null && fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
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
  if (node === null) break;
  if (head === null) break;
  if (node.next === null) {
    node.next = head.next;
    break;
  }
  node = node.next;
}

console.log(detectLoop(list)); // true
