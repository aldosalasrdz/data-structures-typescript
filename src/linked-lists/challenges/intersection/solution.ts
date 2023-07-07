import { SinglyLinkedList } from "../../LinkedList";

function intersection<T>(
  list1: SinglyLinkedList<T>,
  list2: SinglyLinkedList<T>,
) {
  const newList = new SinglyLinkedList();
  const visited = new Set<T>();
  const commonElements = [];

  let list1Head = list1.head;
  let list2Head = list2.head;

  while (list1Head) {
    visited.add(list1Head.data);
    list1Head = list1Head.next;
  }

  while (list2Head) {
    if (visited.has(list2Head.data)) {
      commonElements.push(list2Head.data);
    }
    list2Head = list2Head.next;
  }

  for (const element of commonElements) {
    newList.insertAtTail(element);
  }

  return newList;
}

const l1 = new SinglyLinkedList<number>();
l1.insertAtTail(10);
l1.insertAtTail(20);
l1.insertAtTail(80);
l1.insertAtTail(60);

const l2 = new SinglyLinkedList<number>();
l2.insertAtTail(15);
l2.insertAtTail(20);
l2.insertAtTail(30);
l2.insertAtTail(60);
l2.insertAtTail(45);

console.log(intersection(l1, l2).printList());
