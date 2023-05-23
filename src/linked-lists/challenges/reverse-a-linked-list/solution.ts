import { SinglyLinkedList } from "../../LinkedList";

function reverse<T>(list: SinglyLinkedList<T>) {
  let previousNode = null;
  let currentNode = list.head;
  let nextNode = null;

  while (currentNode !== null) {
    nextNode = currentNode.next;
    currentNode.next = previousNode;
    previousNode = currentNode;
    currentNode = nextNode;
  }

  list.head = previousNode;
}

const list = new SinglyLinkedList<number>();

list.insertAtHead(10);
list.insertAtHead(20);
list.insertAtHead(30);
list.insertAtHead(40);

list.printList();

reverse(list);

list.printList();
