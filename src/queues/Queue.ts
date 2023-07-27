import { DoublyLinkedList } from "./DoublyLinkedList";

export class Queue {
  public items = new DoublyLinkedList();

  isEmpty() {
    return this.items.length === 0;
  }

  getFront() {
    if (this.isEmpty()) {
      return null;
    } else {
      return this.items.head;
    }
  }

  size() {
    return this.items.length;
  }
}
