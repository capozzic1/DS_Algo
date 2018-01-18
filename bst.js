function Node(key) {
  this.key = key;
  this.right = null;
  this.left = null;
}

function BST() {

  this.search = function(root, key) {
    if (root.key === key || root === null) {
      return root;
    }

    //10 - left(5,4,3) - right(12-13-14)
    if (key < root.key) {
      return this.search(root.left, key);
    }

    return this.search(root.right, key);

  }

}
