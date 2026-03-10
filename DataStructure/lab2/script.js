class node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class doubleLinkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    pushFront(data) {
        this.length++;
        if (!this.head) {
            this.head = this.tail = new node(data);
            return;
        }
        let newNode = new node(data);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
    }

    pushBack(data) {
        this.length++;
        if (!this.head) {
            this.head = this.tail = new node(data);
            return;
        }
        let newNode = new node(data);
        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
    }

    insert(index, data) {
        if (index == 0) {
            this.pushFront(data);
            return;
        }
        if (index == this.length) {
            this.pushBack(data);
            return;
        }
        this.length++;
        if (index >= this.length) {
            return `index ${index} out of range`;
        }
        let newNode = new node(data), currentNode = this.head, cnt = 0;
        while (currentNode.next && cnt < index - 1) {
            currentNode = currentNode.next;
            cnt++;
        }
        newNode.next = currentNode.next;
        currentNode.next.prev = newNode;
        currentNode.next = newNode;
        newNode.prev = currentNode;
    }

    popFront() {
        if (!this.head) {
            return `List is empty`;
        }
        this.length--;
        if (this.head.next == null) {
            this.head = this.tail = null;
            return;
        }
        this.head = this.head.next;
    }

    popBack() {
        if (!this.tail) {
            return `List is empty`;
        }
        this.length--;
        if (this.tail.prev == null) {
            this.head = this.tail = null;
            return;
        }
        this.tail = this.tail.prev;
        this.tail.next = null;

    }

    delete(index){
        if(index == 0){
            this.popFront();
            return;
        }
        if(index == index.length - 1){
            this.popBack();
            return;
        }
        if(index >= this.length || index < 0){
            console.log("index Not Valid");
            return;
        }
        let current = this.head, cnt =0;
        while(current.next.next && cnt < index - 1){
            cnt++;
            current = current.next;
        }
        current.next = current.next.next;
        current.next.prev = current;
        this.length--;
    }



    printForward() {
        let currentNode = this.head, output = "";
        while (currentNode) {
            output += currentNode.data + " ";
            currentNode = currentNode.next;
        }
        console.log(output);
    }



    printBackward() {
        let currentNode = this.tail, output = "";
        while (currentNode) {
            output += currentNode.data + " ";
            currentNode = currentNode.prev;
        }
        console.log(output);
    }


    search(target) {
        let currentNode = this.head, cnt = 0;
        while (currentNode) {
            if (target === currentNode.data)
                return `${target} has index ${cnt} in list`;
            currentNode = currentNode.next;
            cnt++;
        }
        return `${target} not found in list`;
    }
}

lst = new doubleLinkedlist();
lst.pushBack(3);
lst.pushBack(4);
lst.printForward();
lst.pushFront(1);
lst.pushFront(0);
lst.printForward();
console.log(lst.search(3));
lst.insert(2, 2);
lst.printForward();
lst.printBackward();
lst.insert(5, 6);
lst.insert(5, 5);
lst.delete(5);
lst.printForward();
lst.printBackward();


