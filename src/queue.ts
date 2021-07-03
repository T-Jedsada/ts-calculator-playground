export class Queue<T> {
  private items: Array<T> = [];

  pushItem(item: T) {
    this.items.push(item);
  }

  pop() {
    this.items.shift();
  }

  getItems() : Array<T> {
      return this.items;
  }
}