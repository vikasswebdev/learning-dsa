/* Stacks! */

// functions: push, pop, peek, length

var letters = []; // this is our stack

var word = "freeCodeCamp";

var rword = "";

// put letters of word into stack
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

// pop off the stack in reverse order
for (var i = 0; i < word.length; i++) {
  rword += letters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome.");
} else {
  console.log(word + " is not a palindrome.");
}

class Stack {
  count = 0;

  storage = {};

  // Adds a value onto the end of the stack
  push = function (value) {
    this.storage[this.count] = value;
    this.count++;
  };

  // Removes and returns the value at the end of the stack
  pop = function () {
    if (this.count === 0) {
      return undefined;
    }

    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  };

  size = function () {
    return this.count;
  };

  // Returns the value at the end of the stack
  peek = function () {
    return this.storage[this.count - 1];
  };
}

var myStack = new Stack();

myStack.push(1);

console.log(myStack.peek());

myStack.push(2);

console.log(myStack.peek());

myStack.pop();

console.log(myStack.peek());

myStack.push("freeCodeCamp");

console.log(myStack.size());

console.log(myStack.peek());

console.log(myStack.pop());

console.log(myStack.peek());
