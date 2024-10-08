class Node {
    constructor(val) {
        this.value = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySeachTree {
    constructor() {
        this.root = null;
    }

    isEmptyTree() {
        return this.root === null
    }

    makeTree(val) {
        let newNode = new Node(val)
        if (this.root === null) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }

    }

    insertNode(root, newNode) {
        if (root.value > newNode.value) {
            if (root.left === null) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode)
            }
        }
        else {
            if (root.right === null) {
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }
}

let bst = new BinarySeachTree();

bst.makeTree(20)
bst.makeTree(10)
bst.makeTree(5)
bst.makeTree(11)
bst.makeTree(30)
bst.makeTree(40)
bst.makeTree(23)

console.log(bst.isEmptyTree())
console.log(bst)
