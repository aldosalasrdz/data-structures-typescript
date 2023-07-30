import { Node } from "./Node";

export class DoublyLinkedList<T> {
  public length = 0;
  public head: Node<T> | null = null;
  public tail: Node<T> | null = null;

  // Add node to the end of the list
  insertTail(data: T) {
    const newNode = new Node(data);

    if (this.length === 0 || this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;

      newNode.prev = this.tail;

      this.tail = newNode;
    }

    this.length++;

    return newNode;
  }

  // Remove node from the beginning of the list
  removeHead() {
    if (this.length === 0 || this.head === null) {
      return null;
    }

    const nodeToRemove = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = nodeToRemove.next;

      if (this.head !== null) {
        this.head.prev = null;
      }

      nodeToRemove.next = null;
    }

    this.length--;

    return nodeToRemove.data;
  }

  firstNode() {
    if (!(this.head == null)) {
      return this.head.data;
    } else return null;
  }

  // Return list items
  toString() {
    const list = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      list.push(JSON.stringify(currentNode.data));
      currentNode = currentNode.next;
    }

    return list.toString();
  }
}
