import { SinglyLinkedList } from "../../LinkedList";

function findMid<T>(list: SinglyLinkedList<T>) {
  let slowerNode = list.head;
  let fasterNode = list.head;

  if (slowerNode === null || fasterNode === null) return "Empty list";

  if (slowerNode.next === null) {
    return slowerNode;
  }

  while (
    slowerNode != null &&
    fasterNode.next != null &&
    fasterNode.next.next != null
  ) {
    slowerNode = slowerNode.next;
    fasterNode = fasterNode.next.next;
  }

  return slowerNode;
}

const myList = new SinglyLinkedList<number>();
myList.insertAtTail(7);
myList.insertAtTail(14);
myList.insertAtTail(10);
myList.insertAtTail(21);
myList.insertAtTail(34);

console.log(findMid(myList));
