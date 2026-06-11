export class Collection<T> {

  private items: T[] = [];

  constructor(initialItems: T[] = []) {
    this.items = [...initialItems];
  }

  getAll(): T[] {
    return this.items;
  }

  getByIndex(index: number): T | undefined {
    return this.items[index];
  }

  clear(): void {
    this.items = [];
  }

  removeByIndex(index: number): void {
    this.items.splice(index, 1);
  }

  replaceByIndex(index: number, newItem: T): void {
    this.items[index] = newItem;
  }

}
