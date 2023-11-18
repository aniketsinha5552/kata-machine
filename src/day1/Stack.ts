type Node<T> = {
    value: T;
    prev: Node<T> | null;
}

export default class Stack<T> {
    public length: number;
    private head: Node<T> | null;
    

    constructor() {
        this.length = 0;
        this.head = null;
    }

    push(item: T): void {
        const newNode: Node<T> = {
            value: item,
            prev: this.head
        };
        this.head = newNode;
        this.length++;

}
    pop(): T | undefined {
        if (this.head === null) {
            return undefined;
        }
        const item = this.head.value;
        this.head = this.head.prev;
        this.length--;
        return item;

}
    peek(): T | undefined {
        return this.head?.value;

}
}