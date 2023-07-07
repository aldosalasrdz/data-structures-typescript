import { SinglyLinkedList } from "../../LinkedList";

function findNth<T>(list: SinglyLinkedList<T>, n: number) {
  let head = list.head;
  let temp = null;
  let length = 0;

  if (head === null) {
    return null;
  }

  while (head !== null) {
    head = head.next;
    length++;
  }

  const nthNodePos = length - n;

  if (nthNodePos < 0 || nthNodePos > length) {
    return null;
  }

  temp = list.head;
  for (let i = 0; i < nthNodePos; i++) {
    temp = temp?.next;
  }

  return temp;
}

const list = new SinglyLinkedList<number>();

list.insertAtTail(22);
list.insertAtTail(18);
list.insertAtTail(60);
list.insertAtTail(78);
list.insertAtTail(47);
list.insertAtTail(39);
list.insertAtTail(99);

console.log(findNth(list, 3));
