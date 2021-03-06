class Node {
  constructor(val, left = null, right = null) {
    this.value = val;
    this.left = left;
    this.right = right;
  }
}

var n = new Node(3);
//console.log(n);

class BST {
  constructor() {
    this.root = null;
  }

  isPresent(val) {
    let current = this.root;

    while (current) {
      if (val === current.value) {
        return true;
      }

      if (val < current.value) {
        current = current.left;
      } else {
        current = current.right;

      }

    }

    return false;
  }

  search(root, val) {
    if (root === null || root.value === val) {
      return root;
    } else if (root.value > val) {
      return this.search(root.left, val);
    } else if (root.value < val) {
      return this.search(root.right, val);
    }
  }

  add(root, val) {
    if (root === null) {
      this.root = new Node(val);
    } else {
      if (root.value > val) {
        if (root.left === null) {
          root.left = new Node(val);
        } else {
          //console.log(root.left);
          return this.add(root.left, val);
        }
      } else {
        if (root.right === null) {
          root.right = new Node(val);
        } else {
          return this.add(root.right, val);
        }
      }
    }
  }

  findMin(node) {
    let current = node;

    while (current.left) {
      current = current.left;
    }
    return current;

  }

  remove(root, val) {

    if (root === null) {
      return this.root;
    } else if (root.value < val) {
      root.right = this.remove(root.right, val);
    } else if (root.value > val) {
      root.left = this.remove(root.left, val);
    } else {
      //one child
      if (root.left === null) {
        let temp = root.right;
        root = null;
        return temp;
      } else if (root.right === null) {
        let temp = root.left;
        root = null;
        return temp;
      }
      //two children
      //find inorder successor
      let successor = this.findMin(root.right);
      //copy successor to root node;
      root.value = successor.value;
      //delete inorder successor
      root.right = this.remove(root.right, successor.value);
    }
    return root;

  }

  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.value);
      this.inorder(root.right);
    }

  }

  preorder(root) {
    if (root) {
      console.log(root.value);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }

  postorder(root) {
    if (root) {
      this.postorder(root.left);

      this.postorder(root.right);

      console.log(root.value);
    }
  }

}

let b = new BST();
b.add(b.root, 10);
b.add(b.root, 9);
b.add(b.root, 7);
b.add(b.root, 50);
b.add(b.root, 8);
b.add(b.root, 12);
b.add(b.root, 13);

//b.preorder(b.root);
b.postorder(b.root);
