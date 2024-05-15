class Node<T> {
  constructor(public data: T) {}

  print() {
    console.log(this.data);
  }
}

const n = new Node<number>(10);

console.log(n);
