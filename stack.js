// Your implementation goes here
class Stack {
  #array = [];
  constructor(...inputs) {
    inputs.forEach(this.push.bind(this));
  }
  // Push
  push(input) {
    this.#array.push(input);
  }
  // Pop
  pop() {
    return this.#array.pop() || null;
  }
  // Peek
  peek() {
    return this.#array[this.size - 1];
  }
  // Swap
  swap() {
    const topElement = this.pop();
    const secondTopElement = this.pop();
    this.push(topElement);
    this.push(secondTopElement);
  }
  // isEmpty
  isEmpty() {
    return this.size === 0 ? true : false;
  }
  // returns size of Stack
  get size() {
    return this.#array.length;
  }
}

module.exports = Stack;
