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

  remove(root, val) {

    if (root === null){
      return this.root;
    } else if (root.value < val){
      root.right = this.remove(root.right, val);
    } else if (root.value > val){
      root.left = this.remove(root.left, val);
    } else {
      if (root.left === null){
        let temp = root.right;
        root = null;
        return temp;
      } else if (root.right === null){
        let temp = root.left;
        root = null;
        return temp;
      }
    }
    return root;

  }
}

let b = new BST();
b.add(b.root, 10);

b.add(b.root, 9);

b.add(b.root, 7);

b.add(b.root, 12);

b.add(b.root, 13); //10 - 9 - 12 - 13

//b.remove(b.root, 13); //10 - 9 - 12 - 13

//b.remove(b.root, 14);
//
console.log(b.root);
