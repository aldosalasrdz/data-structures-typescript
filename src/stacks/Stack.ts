export class Stack<T> {
  public items: T[] = [];
  public top: null | T = null;

  getTop() {
    if (this.items.length === 0) {
      return null;
    } else {
      return this.top;
    }
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  push(element: T) {
    this.items.push(element);
    this.top = element;
  }

  pop() {
    if (this.items.length === 0) {
      return null;
    }

    if (this.items.length === 1) {
      this.top = null;
      return this.items.pop();
    } else {
      this.top = this.items[this.items.length - 2];
      return this.items.pop();
    }
  }
}
