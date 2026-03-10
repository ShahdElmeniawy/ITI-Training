class node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class stack {
    constructor() {
        this.head = null;
    }

    push(data) {
        let newNode = new node(data);
        newNode.next = this.head;
        this.head = newNode
    }

    pop() {
        if (this.head)
            this.head = this.head.next;
    }

    top() {
        return this.head.data;
    }

    print(curr = this.head) {
        if (!curr) return "";
        let output = this.print(curr.next) + curr.data + " ";
        if (curr == this.head) console.log(output);
        return output;
    }

    empty() {
        return (this.head == null);
    }
}


class queue {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    push(data) {
        let newNode = new node(data);
        if (!this.tail) this.tail = this.head = newNode;
        this.tail.next = newNode;
        this.tail = this.tail.next;
    }

    pop() {
        if (this.head)
            this.head = this.head.next;
    }

    front() {
        return this.head.data;
    }

    back() {
        return this.tail.data;
    }

    print() {
        let current = this.head, output = "";
        while (current) {
            output += current.data + " ";
            current = current.next;
        }
        console.log(output);
    }

    empty() {
        return (!this.head);
    }
}



class arrayStack {
    constructor() {
        this.arr = [];
    }

    push(data) {
        this.arr.push(data);
    }

    pop() {
        this.arr.pop();
    }

    top() {
        return this.arr.at(this.arr.length - 1);
    }

    print() {
        console.log(...this.arr);
    }

    empty() {
        return (!this.arr.length);
    }
}



class arrayQueue {
    constructor() {
        this.arr = [];
    }

    push(data) {
        this.arr.push(data);
    }

    pop() {
        this.arr.shift();
    }

    front() {
        return this.arr.at(0);
    }

    back(){
        return this.arr.at(this.arr.length - 1);
    }

    print() {
        console.log(...this.arr);
    }

    empty() {
        return (this.arr.length == 0);
    }
}
console.log("--------------------stack-------------------------");

let st = new stack();
st.push(1);
st.push(2);
st.push(3);
st.push(4);
st.print();
console.log(st.top());
st.pop();
st.print();

console.log("--------------------queue-------------------------");

let que = new queue();

que.push(1);
que.push(2);
que.push(3);
que.push(4);
que.print();
console.log(que.front());
console.log(que.back());
que.pop();
que.print();


console.log("--------------------arrayStack-------------------------");

let arraySt = new arrayStack();
arraySt.push(1);
arraySt.push(2);
arraySt.push(3);
arraySt.push(4);
arraySt.print();
console.log(arraySt.top());
arraySt.pop();
arraySt.print();

console.log("--------------------arrayQueue-------------------------");


let arrayQue = new arrayQueue();

arrayQue.push(1);
arrayQue.push(2);
arrayQue.push(3);
arrayQue.push(4);
arrayQue.print();
console.log(arrayQue.front());
console.log(arrayQue.back());
arrayQue.pop();
arrayQue.print();