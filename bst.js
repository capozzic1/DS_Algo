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
}

let b = new BST();
b.add(b.root, 10);
b.add(b.root, 12);
b.add(b.root, 80);
b.add(b.root, 7);

console.log(b.root);
