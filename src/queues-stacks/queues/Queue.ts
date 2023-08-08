import { DoublyLinkedList } from "./DoublyLinkedList";

export class Queue<T> {
  public items = new DoublyLinkedList<T>();

  isEmpty() {
    return this.items.length === 0;
  }

  getFront() {
    if (this.items.head === null) {
      return null;
    } else {
      return this.items.head.data;
    }
  }

  size() {
    return this.items.length;
  }

  enqueue(data: T) {
    return this.items.insertTail(data);
  }

  dequeue() {
    return this.items.removeHead();
  }
}
