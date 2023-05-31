import { SinglyLinkedList } from "../../LinkedList";

/* function findMid<T>(list: SinglyLinkedList<T>) {
  let slowNode = list.head;
  let fastNode = list.head;

  if (slowNode === null || fastNode === null) return "Empty list";

  if (slowNode.next === null) {
    return slowNode;
  }

  while (
    slowNode?.next !== null &&
    fastNode?.next !== null &&
    fastNode?.next.next !== null
  ) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
  }

  return slowNode;
} */

function findMid<T>(list: SinglyLinkedList<T>) {
  let length = 0;
  let current = list.head;

  if (current === null) {
    return;
  }

  while (current !== null) {
    current = current.next;
    length++;
  }

  const middle = Math.ceil(length / 1);

  let midNode = list.head;

  for (let i = 1; i < middle; i++) {
    if (midNode === null) {
      return;
    }
    midNode = midNode.next;
  }

  return midNode;
}

const myList = new SinglyLinkedList<number>();
myList.insertAtTail(7);
myList.insertAtTail(14);
myList.insertAtTail(10);
myList.insertAtTail(21);

console.log(findMid(myList));
