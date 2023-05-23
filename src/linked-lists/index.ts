import { SinglyLinkedList } from "./LinkedList";

const list = new SinglyLinkedList<number>();

console.log(list.delete(45));

list.deleteAtHead();
list.printList();

console.log(list.isEmpty());

list.insertAtHead(10);
list.insertAtHead(2);

list.printList();
list.delete(2);
list.printList();

list.insertAtHead(5);
list.insertAtHead(22);

list.insertAtTail(19);
list.insertAtTail(45);
list.insertAtTail(4);
list.insertAtTail(10);

list.printList();

console.log(list.search(5));
console.log(list.search(45));

list.deleteAtHead();
list.deleteAtHead();
list.deleteAtHead();

list.printList();
