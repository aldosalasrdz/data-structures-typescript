"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinglyLinkedList = void 0;
const Node_1 = require("./Node");
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }
    isEmpty() {
        return this.head === null;
    }
    insertAtHead(data) {
        const node = new Node_1.Node(data);
        node.next = this.head;
        this.head = node;
        return node;
    }
    insertAtTail(data) {
        const node = new Node_1.Node(data);
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
    search(data) {
        let current = this.head;
        while (current !== null) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }
        return false;
    }
    deleteAtHead() {
        if (this.head === null) {
            return;
        }
        this.head = this.head.next;
    }
    delete(data) {
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
    deleteAtTail() {
        if (this.head === null) {
            return;
        }
        let current = this.head;
        if (current.next === null) {
            this.deleteAtHead();
            return;
        }
        while (current.next !== null) {
            if (current.next.next === null) {
                current.next = null;
                return;
            }
            current = current.next;
        }
    }
    printList() {
        if (this.isEmpty()) {
            console.log("Empty list");
        }
        else {
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
exports.SinglyLinkedList = SinglyLinkedList;
