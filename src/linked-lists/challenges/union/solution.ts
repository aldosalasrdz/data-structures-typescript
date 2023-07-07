import { SinglyLinkedList } from "../../LinkedList";

function union<T>(list1: SinglyLinkedList<T>, list2: SinglyLinkedList<T>) {
  const newList = new SinglyLinkedList();

  const visited = new Map<T, boolean>();

  let list1Head = list1.head;
  let list2Head = list2.head;

  while (list1Head) {
    if (visited.has(list1Head.data)) {
      list1Head = list1Head.next;
      continue;
    } else {
      visited.set(list1Head.data, true);
      newList.insertAtTail(list1Head.data);
    }
    list1Head = list1Head.next;
  }

  while (list2Head) {
    if (visited.has(list2Head.data)) {
      list2Head = list2Head.next;
      continue;
    } else {
      visited.set(list2Head.data, true);
      newList.insertAtTail(list2Head.data);
    }
    list2Head = list2Head.next;
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

console.log(union(l1, l2).printList());
