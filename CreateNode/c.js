class Node {
    constructor(val){
        this.head = val;
        this.next = null;
    }
}



let first = new Node("Hello");
first.next = new Node("How");
first.next.next = new Node("Are");
first.next.next.next = new Node("You!!");

console.log(first);
