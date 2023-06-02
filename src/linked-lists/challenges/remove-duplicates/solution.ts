import { SinglyLinkedList } from "../../LinkedList";

// Time complexity O(n) | Space complexity (n)
function removeDuplicates<T>(list: SinglyLinkedList<T>) {
  let current = list.head;
  let previous = null;

  const map = new Map<T, boolean>();

  while (current !== null) {
    if (map.has(current.data)) {
      if (previous !== null) {
        previous.next = current.next;
      } else {
        list.head = current.next;
      }
    } else {
      map.set(current.data, true);
      previous = current;
    }
    current = current.next;
  }

  return list;
}

const list = new SinglyLinkedList<number>();

list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(2);
list.insertAtTail(2);
list.insertAtTail(3);
list.insertAtTail(4);
list.insertAtTail(4);
list.insertAtTail(5);
list.insertAtTail(6);
list.insertAtTail(6);
list.insertAtTail(8);
list.insertAtTail(8);
list.insertAtTail(9);

list.printList();

removeDuplicates(list);

list.printList();
