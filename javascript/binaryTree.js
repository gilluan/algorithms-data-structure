(function() {

    function BinaryTree(node) {
        function Node(key) {
            this.key = key;
            this.left = null;
            this.right = null;
        }

        let root = null;

        let insertNode = (root, node) => {
            if(node.key < root.key) {
                if(!root.left) {
                    root.left = node;
                } else {
                    insertNode(root.left, node);
                }
            } else {
                if(!root.right) {
                    root.right = node;
                } else {
                    insertNode(root.right, node);
                }
            }
        };

        this.insert =  (key)  => {
            let current = new Node(key);
            if(!this.root) {
                this.root = current;
            } else {
                insertNode(this.root, current);
            }

           // console.log(JSON.stringify(this.root));

        };

        let searchNode = (root, key) => {
            if(root.key === key) {
                return root;
            } else {
                if(root.left) {
                    return searchNode(root.left, key);
                } else if(root.right) {
                    return searchNode(root.right, key);
                }
            }
            return null;
        }

        this.search = (key) => {
            if(!this.root) {
                return null;
            } else {
                return searchNode(this.root, key)

            }
        };

        let inOrderTraverseNode = (root, callback) => {
            if(root) {
                inOrderTraverseNode(root.left, callback);
                callback.bind(callback)(root.key);
                inOrderTraverseNode(root.right, callback);
            }
        };

        this.inOrderTraverse = (callback) => {
            inOrderTraverseNode(this.root, callback);
        };
        /*

        preOrderTraverse: () => {},
        postOrderTraverse: () => {},
        min: () => {},
        max: () => {},
        remove: () => {}
*/
    }

    let print = (item) => {
        console.log(item);
    }
    var arvore = null;
    arvore = new BinaryTree();
    arvore.insert(4);
    arvore.insert(2);
    arvore.insert(3);
    arvore.insert(5);
    //console.log(JSON.stringify(arvore));
    console.log(arvore.search(4));
    //console.log(arvore.search(6));
    //console.log(arvore.search(4));
    //arvore.inOrderTraverse(print);

})();
