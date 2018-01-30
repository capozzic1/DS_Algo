//a simple stack attempt

class Stack {
  constructor() {
    this.stack = [];
  }

  push(item) {
    this.stack.push(item);
  }

  pop() {
    return this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }
}

let b = new Stack();
b.push("babababababababa");
b.push("babababababababa");
b.push("babababababababa1");

console.log(b.peek());
