class node {
    constructor(data) {
        this.data = data;
        this.right = null;
        this.left = null;
    }
}

class binarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(data) {
        let newNode = new node(data), current = this.root;
        if (this.root == null) {
            this.root = newNode;
            return;
        }
        while (true) {
            if (current.data < data) {
                if (!current.right) return current.right = newNode;
                current = current.right;
            } else {
                if (!current.left) return current.left = newNode;
                current = current.left;
            }
        }
    }

    postOrder(node = this.root) {
        if (!node) return "";
        return this.postOrder(node.left) + this.postOrder(node.right) + node.data + " ";
    }


    preOrder(node = this.root) {
        if (!node) return "";
        return node.data + " " + this.preOrder(node.left) + this.preOrder(node.right);
    }


    inOrder(node = this.root) {
        if (!node) return "";
        return this.inOrder(node.left) + node.data + " " + this.inOrder(node.right);
    }

    search(data) {
        let current = this.root;
        while (current) {
            if (current.data == data) {
                return `found ${data}`;
            }
            current = (current.data < data ? current.right : current.left)
        }
        return `not found ${data}`;
    }


    delete(data, current = this.root, last = null, check = "a") {
        while (current) {
            if (current.data == data) {
                if (current.right) {
                    current.data = current.right.data;
                    this.delete(current.data, current.right, current, 'r');
                } else if (current.left) {
                    current.data = current.left.data;
                    this.delete(current.data, current.left, current, 'l');
                } else {
                    if(check == 'l')last.left = null;
                    else last.right = null;
                    return
                }
            }
            current = (current.data < data ? current.right : current.left)
        }
        return `not found ${data}`;
    }
}

let bst = new binarySearchTree();

for (let ele of [30, 9, 55, 2, 20, 35, 70, 1, 7, 11, 25, 31, 40, 5, 8]) bst.insert(ele);

console.log("---------------------postOrder-------------------")

console.log(bst.postOrder());  // 1 5 8 7 2 11 25 20 9 31 40 35 70 55 30

console.log("---------------------preOrder-------------------")

console.log(bst.preOrder());  // 30 9 2 1 7 5 8 20 11 25 55 35 31 40 70

console.log("---------------------inOrder-------------------")

console.log(bst.inOrder());  // 1 2 5 7 8 9 11 20 25 30 31 35 40 55 70

console.log("---------------------search-------------------")

console.log(bst.search(5));
console.log(bst.search(43));

console.log("---------------------delete-------------------")

bst.delete(9);

console.log(bst.postOrder());  // 1 5 8 7 2 11 25 20 31 40 35 70 55 30