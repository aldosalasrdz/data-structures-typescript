import { Node } from "./Node";

interface LinkedList<T> {
  insertAtTail(data: T): Node<T>;
  insertAtHead(data: T): Node<T>;
  delete(data: T): boolean;
  deleteAtHead(): void;
  search(data: T): boolean;
  isEmpty(): boolean;
}

export class SinglyLinkedList<T> implements LinkedList<T> {
  private head: Node<T> | null = null;

  isEmpty(): boolean {
    return this.head === null;
  }

  insertAtHead(data: T): Node<T> {
    const node = new Node<T>(data);

    node.next = this.head;
    this.head = node;

    return node;
  }

  insertAtTail(data: T): Node<T> {
    const node = new Node<T>(data);

    if (this.head === null) {
      this.head = node;
      return node;
    }

    let current = this.head;
    while (current.next !== null) {
      current = current.next;
    }
    current.next = node;

    return node;
  }

  search(data: T): boolean {
    let current = this.head;

    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  deleteAtHead(): void {
    if (this.head === null) {
      return;
    }

    this.head = this.head.next;
  }

  delete(data: T): boolean {
    if (this.head === null) {
      return false;
    }

    let current = this.head;

    if (current.data === data) {
      this.head = current.next;
      return true;
    }

    while (current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return true;
      }
      current = current.next;
    }

    return false;
  }

  printList(): void {
    if (this.isEmpty()) {
      console.log("Empty list");
    } else {
      let current = this.head;
      while (current) {
        process.stdout.write(String(current.data));
        process.stdout.write(" -> ");
        current = current.next;
      }
      console.log("null");
    }
  }
}
