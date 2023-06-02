import { SinglyLinkedList } from "../../LinkedList";

function findMid<T>(list: SinglyLinkedList<T>) {
  let slowNode = list.head;
  let fastNode = list.head;

  if (slowNode === null || fastNode === null) return "Empty list";

  if (slowNode.next === null) {
    return slowNode;
  }

  while (slowNode && fastNode.next && fastNode.next.next) {
    slowNode = slowNode.next;
    fastNode = fastNode.next.next;
  }

  return slowNode;
}

const myList = new SinglyLinkedList<number>();
myList.insertAtTail(7);
myList.insertAtTail(14);
myList.insertAtTail(10);
myList.insertAtTail(21);
myList.insertAtTail(34);

console.log(findMid(myList));
