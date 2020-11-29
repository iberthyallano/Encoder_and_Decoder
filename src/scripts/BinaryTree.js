class Node{
    constructor(data){
        this.key = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree{
    constructor(){
        this.root = null;
    }

    add(data){
        let new_node = new Node(data);
        
        if (this.root === null){
            this.root = new_node;
        } else {
            this.addNode(this.root, new_node);
        }
    }

    addNode(node, new_node){
        if (new_node.key < node.key){
            if (node.left === null){
                node.left = new_node;
            } else {
                this.addNode(node.left, new_node);
            }
        } else {
            if (node.right === null){
                node.right = new_node;
            } else {
                this.addNode(node.right, new_node);
            }
        }
    }

    remove(data){
        this.root = this.removeNode(this.root, data);
    }

    removeNode(node, data){
        if (node === null){
            return null;
        } else if (data > node.key){
            node.right = this.removeNode(node.right, data);
            return node;
        } else {
            if (node.left === null && node.right === null){
                node = null;
                return node;
            } 
            if(node.left === null){
                node = node.right;
                return node;
            } else if (node.right === null){
                node = node.left;
                return node;
            }
            let aux = this.findSmallestNode(node.right);
            node.key = aux.key;
            node.right = this.removeNode(node.right, aux.key);
            return node;
        }
    }

    inOrder(node){
        if (node !== null){
            this.inOrder(node.left);
            console.log(node.key);
            this.inOrder(node.right);
        }
    }

    preOrder(node){
        if (node !== null){
            console.log(node.key);
            this.preOrder(node.left);
            this.preOrder(node.right);
        }
    }

    posOrder(node){
        if (node !== null){
            this.posOrder(node.left);
            this.posOrder(node.right);
            console.log(node.key);
        }
    }

    findRootNode(){
        return this.root;
    }

    findSmallestNode(node){
        if (node.left===null){
            return node;
        } else {
            return this.findSmallestNode(node.left);
        }
    }

    findLargerNode(node){
        if (node.right===null){
            return node;
        } else {
            return this.findLargerNode(node.right);
        }
    }

    search(node, data){
        if (node === null){
            return null;
        }
        else if (data < node.key){
            return this.search(node.left, data);
        } else if (data > node.key){
            return this.search(node.right, data);
        } else {
            return node;
        }
    }

}

module.exports = BinaryTree;