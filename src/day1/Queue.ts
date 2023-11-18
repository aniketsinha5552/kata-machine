type Node<T> = {
    value: T;
    next: Node<T> | null;
}
export default class Queue<T> {
    public length: number;
    public head: Node<T>;
    public tail : Node<T>;
    

    constructor(val: Number) {
        this.head = Node
    }

    enqueue(item: T): void {

}
    deque(): T | undefined {

}
    peek(): T | undefined {

}
}